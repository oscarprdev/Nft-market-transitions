import { API_URL } from '../constants';

const arrayImages = [
	'../../public/assets/images/bored-ape-1.png',
	'../../public/assets/images/bored-ape-2.png',
	'../../public/assets/images/bored-ape-3.png',
	'../../public/assets/images/bored-ape-4.avif',
];

const defaultNft = {
	name: '',
	eth_price: 0,
	image: '',
	views: 0,
	user: '',
	likes: 0,
	date: '',
	id: '',
};

const mapNftListWithImages = (data = [defaultNft]) => {
	return data.map((item, i) => {
		return {
			...item,
			image: arrayImages[i],
		};
	});
};

const mapNftList = (data = [defaultNft]) => {
	return data.map((item) => {
		return {
			name: item.name,
			eth: item.eth_price,
			image: item.image,
			views: item.views,
			user: item.user,
			likes: item.likes,
			date: item.date,
			id: item.id,
		};
	});
};

export const getNftList = async () => {
	try {
		const response = await fetch(`${API_URL}/data`);
		const nftList = await response.json();

		return mapNftList(mapNftListWithImages(nftList));
	} catch (error) {
		console.error(error);
		return mapNftList(mapNftListWithImages());
	}
};

export const getNftbyId = async (id) => {
	const response = await fetch(`${API_URL}/data/${id}`);
	const nftItem = await response.json();

	const nft = {
		...nftItem,
		eth: nftItem.eth_price,
		image: arrayImages[id - 1],
	};

	return nft;
};
