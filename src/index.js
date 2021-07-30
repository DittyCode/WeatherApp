import Person from './components/more';
import { overlay, content } from './components/gsap';
import { location, currentLocation } from './components/location/location';
import './scss/styles.scss';

location();

overlay();
content();
