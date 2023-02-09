import { Categories } from './components/Categories';
import suits from './assets/img/suits_category.jpg';
import shirts from './assets/img/shirts_category.jpg';
import shoes from './assets/img/shoes_category.jpeg';
import slider1 from './assets/img/slider_1.jpg';
import slider2 from './assets/img/slider_2.jpg';
import slider3 from './assets/img/slider_3.jpg';

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

export const sliderItems: SliderItems[] = [
  {
    id: 1,
    img: slider1,
    title: 'JESIENNA WYPRZEDAŻ',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum iusto obcaecati sint. Accusantium aliquam aliquid ducimus eius enim ipsa minus, odit porro, praesentium, quaerat quasi recusandae repellendus vero vitae voluptates.',
    bg: 'fff',
  },
  {
    id: 2,
    img: slider2,
    title: 'NOWE KOLEKCJE',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum iusto obcaecati sint. Accusantium aliquam aliquid ducimus eius enim ipsa minus, odit porro, praesentium, quaerat quasi recusandae repellendus vero vitae voluptates.',
    bg: 'eee',
  },
  {
    id: 3,
    img: slider3,
    title: 'TRZECI PRODUKT -50%',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum iusto obcaecati sint. Accusantium aliquam aliquid ducimus eius enim ipsa minus, odit porro, praesentium, quaerat quasi recusandae repellendus vero vitae voluptates.',
    bg: 'd3d3d3',
  },
];

export const categories: Categories[] = [
  {
    id: 1,
    img: suits,
    title: 'GARNITURY',
    cat: 'garnitury',
  },
  {
    id: 2,
    img: shirts,
    title: 'KOSZULE',
    cat: 'koszule',
  },
  {
    id: 3,
    img: shoes,
    title: 'OBUWIE',
    cat: 'obuwie',
  },
];
