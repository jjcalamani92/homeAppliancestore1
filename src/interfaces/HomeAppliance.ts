export interface IHomeAppliance {
	_id: string;
	name: string;
	brand: string;
	image: string[];
	description: string;
	inStock: number;
	slug: string;
	category: string;
	section: string;
	item: string;
	price: number;
	oldPrice: number;
	tags: string[];
	client: string;
	status: boolean;
	site: string;

	color: string;
}