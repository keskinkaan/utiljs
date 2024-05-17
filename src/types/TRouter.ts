/* eslint-disable no-unused-vars */
export type TLayoutProps = {
	name: string;
};

interface IChildren {
	path: string;
	component: () => string | Promise<string>;
}

export interface IRoute {
	path: string;
	component: () => string | Promise<string>;
	children?: IChildren[];
	layout?: (options: TLayoutProps) => string | Promise<string>;
	view?: string;
	name?: string;
}

export interface IRouter {
	app: string;
	router: IRoute[];
}
