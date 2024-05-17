import type { IRoute, IRouter } from '../types';
import { Logger } from '../logger';

const routes: IRoute[] = [];
let app: string;

export const createRouter = (obj: IRouter) => {
	app = obj.app;
	obj.router.forEach((route) => {
		routes.push(route);
	});
	router();
};

window.addEventListener('popstate', () => {
	router();
});

function returnRoute(routes: IRoute[]): IRoute | undefined {
	const lpn: string[] = location.pathname.split('/');

	for (const route of routes) {
		if (`/${lpn[1]}` === route.path) {
			return route;
		}
	}
	return routes.find(({ name }) => name === 'Not Found');
}

async function getComponent(route: IRoute) {
	const logger = new Logger();

	if (route !== undefined) {
		const appDiv = document.querySelector<HTMLElement>(app);
		if (!appDiv) {
			logger.log('App element not found', 'ERROR', 'Router > getComponent');
			return;
		}

		if (!route.layout) {
			appDiv.innerHTML = await route.component();
		} else {
			if (route.view) {
				let view = document.querySelector<HTMLElement>(route.view);
				if (view !== null) {
					view.innerHTML = await route.component();
				} else {
					appDiv.innerHTML = await route.layout({ name: route.name ?? '' });
					view = document.querySelector<HTMLElement>(route.view);
					if (view) view.innerHTML = await route.component();
					else logger.log('View not found', 'ERROR', 'Router > getComponent');
				}
			} else {
				logger.log(
					'View not specified for the layout',
					'ERROR',
					'Router > getComponent'
				);
			}
		}
	} else {
		logger.log('Route not found', 'ERROR', 'Router > getComponent');
	}
}

function router() {
	const route = returnRoute(routes);

	getComponent(route!)
		.then(() => {
			history.pushState(null, '', location.pathname);
		})
		.catch((err) => {
			new Logger().log(err, 'ERROR', 'Router > router');
		});
}

const navigateTo = (url: string) => {
	history.pushState(null, '', url);
	router();
};

class RouterLink extends HTMLElement {
	private type: string;
	private to: string;
	private isTextDecoration: boolean;
	public className: string;
	public shadow: ShadowRoot;

	constructor() {
		super();
		this.shadow = this.attachShadow({ mode: 'open' });

		this.type = this.getAttribute('type') ?? 'a';
		this.to = this.getAttribute('to') ?? '/';
		this.className = this.getAttribute('className') ?? 'className';
		this.isTextDecoration = this.getAttribute('isTextDecoration') === 'true';

		this.shadow.innerHTML = this.template();
	}

	public connectedCallback() {
		this.shadow.querySelector('*')!.addEventListener('click', (e) => {
			e.preventDefault();
			navigateTo(this.to);
			return;
		});
	}

	public disconnectedCallback() {
		const element = this.shadow.querySelector('*');
		if (element) {
			element.removeEventListener('click', (e) => {
				e.preventDefault();
				navigateTo(this.to);
			});
		}
	}

	static get observedAttributes(): string[] {
		return ['type', 'to', 'class'];
	}

	static get type(): string[] {
		return ['a', 'button'];
	}

	private template() {
		if (this.type === 'a') {
			return `
        <a href="${this.to}" class="${this.className}" style="text-decoration: ${this.isTextDecoration ? 'underline' : 'none'}">
          <slot></slot>
        </a>
      `;
		} else {
			return `
        <button tag="${this.to}">
          <slot></slot>
        </button>
      `;
		}
	}
}
customElements.define('router-link', RouterLink);
