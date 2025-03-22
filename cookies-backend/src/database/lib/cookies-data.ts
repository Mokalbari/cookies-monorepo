import { Cookies } from 'src/graphql';

export const cookiesData: Omit<
  Cookies,
  'id' | 'createdAt' | 'updatedAt' | 'users' | 'orderItems'
>[] = [
  {
    name: 'Le Boss',
    description: 'Il a de grosses noisettes',
    imageUrl:
      'https://res.cloudinary.com/dtzaaxrij/image/upload/v1742135319/cookies/obkdhrcfpikztspm5lxn.png',
    isShowcased: true,
    price: 3.99,
    stock: 100,
  },
  {
    name: "L'Alpla",
    description: 'Généreux, puissant et bien garni',
    imageUrl:
      'https://res.cloudinary.com/dtzaaxrij/image/upload/v1742135319/cookies/bsz7fkkbl3mddthpdllw.png',
    isShowcased: true,
    price: 4.59,
    stock: 100,
  },
  {
    name: 'Le Privilégié',
    description: 'Cookie édition limitée avec des ingrédients premium',
    imageUrl:
      'https://res.cloudinary.com/dtzaaxrij/image/upload/v1742135319/cookies/npsrnxh2wbvypokzcax4.png',
    isShowcased: true,
    price: 5.99,
    stock: 100,
  },
  {
    name: 'Le Sucré',
    description: 'Le détourné au chocolat blanc',
    imageUrl:
      'https://res.cloudinary.com/dtzaaxrij/image/upload/v1742135319/cookies/ef1fcz998c6xcsuqoinw.png',
    isShowcased: false,
    price: 4.59,
    stock: 100,
  },
];
