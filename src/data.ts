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
  },
  {
    id: 2,
    img: 'https://cdn.pixabay.com/photo/2014/08/26/21/48/shirts-428600_960_720.jpg',
    title: 'KOSZULE',
  },
  {
    id: 3,
    img: 'https://images.pexels.com/photos/293406/pexels-photo-293406.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    title: 'OBUWIE',
  },
];
