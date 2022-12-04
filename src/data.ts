interface SliderItems {
  id: number;
  img: string;
  title: string;
  desc: string;
  bg: string;
}

export interface Categories {
  id: number;
  img: string;
  title: string;
  cat: string;
}
export interface PopularProduct {
  id: number;
  img: string;
}

export const sliderItems: SliderItems[] = [
  {
    id: 1,
    img: 'https://images.pexels.com/photos/3778212/pexels-photo-3778212.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    title: 'JESIENNA WYPRZEDAŻ',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum iusto obcaecati sint. Accusantium aliquam aliquid ducimus eius enim ipsa minus, odit porro, praesentium, quaerat quasi recusandae repellendus vero vitae voluptates.',
    bg: 'fff',
  },
  {
    id: 2,
    img: 'https://images.pexels.com/photos/10153608/pexels-photo-10153608.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    title: 'NOWE KOLEKCJE',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum iusto obcaecati sint. Accusantium aliquam aliquid ducimus eius enim ipsa minus, odit porro, praesentium, quaerat quasi recusandae repellendus vero vitae voluptates.',
    bg: 'eee',
  },
  {
    id: 3,
    img: 'https://images.pexels.com/photos/298863/pexels-photo-298863.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    title: 'TRZECI PRODUKT -50%',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum iusto obcaecati sint. Accusantium aliquam aliquid ducimus eius enim ipsa minus, odit porro, praesentium, quaerat quasi recusandae repellendus vero vitae voluptates.',
    bg: 'd3d3d3',
  },
];

export const categories: Categories[] = [
  {
    id: 1,
    img: 'https://images.pexels.com/photos/325876/pexels-photo-325876.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    title: 'GARNITURY',
    cat: 'garnitury',
  },
  {
    id: 2,
    img: 'https://cdn.pixabay.com/photo/2014/08/26/21/48/shirts-428600_960_720.jpg',
    title: 'KOSZULE',
    cat: 'koszule',
  },
  {
    id: 3,
    img: 'https://images.pexels.com/photos/293406/pexels-photo-293406.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    title: 'OBUWIE',
    cat: 'obuwie',
  },
];

export const popularProducts: PopularProduct[] = [
  {
    id: 1,
    img: 'https://images.unsplash.com/photo-1608680574102-3a81ac3c1c88?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=765&q=80',
  },
  {
    id: 2,
    img: 'https://images.unsplash.com/photo-1593030103066-0093718efeb9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80',
  },
  {
    id: 3,
    img: 'https://images.unsplash.com/photo-1594938328870-9623159c8c99?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80',
  },
  {
    id: 4,
    img: 'https://images.unsplash.com/photo-1594938374182-a57061dac3df?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80',
  },
  {
    id: 5,
    img: 'https://static4.sklep.dastan.pl/pol_pl_Koszula-Tailored-Twist-Paisley-1783_1.jpg',
  },
  {
    id: 6,
    img: 'https://static1.sklep.dastan.pl/pol_pl_Koszula-Slim-Fit-Due-Leaf-1756_1.png',
  },
  {
    id: 7,
    img: 'https://static1.sklep.dastan.pl/pol_pl_Buty-401-Mokka-Brown-1302_1.webp',
  },
  {
    id: 8,
    img: 'https://www.recman.pl/media/catalog/product/cache/1/small_image/9df78eab33525d08d6e5fb8d27136e95/5/9/5900320104851.jpg',
  },
];
