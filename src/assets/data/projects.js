import { v4 as uuidv4 } from 'uuid';
import ProjectImg from '../images/projectImg.png';
import UTrackerImg from '../images/utracker.jpg';
import GreenCtgImg from '../images/greenctg.jpg';
import CoinTrackerImg from '../images/cointracker.jpg';
import CavinImg from '../images/cavinimg.jpg';

const projects = [
  {
    id: uuidv4(),
    name: 'Burger Builder',
    desc:
      'It’s a react-redux based web application, anyone can build their own burger by adding ingredients from ingredients chart and can place order.',
    img: UTrackerImg,
  },
  {
    id: uuidv4(),
    name: 'Restaurent Project',
    desc:
      'In this project anyone can visit the website and checkout the food menu, anyone can make a review of any particular food item.',
    img: GreenCtgImg,
  },
  {
    id: uuidv4(),
    name: 'Food Menu Application',
    desc:
      'An react-native based application, people can visit all of the food menu and can mark their food item as favorite dish and also can check their favorite dish in another tab.',
    img: CoinTrackerImg,
  },
  {
    id: uuidv4(),
    name: 'Portfolio Website',
    desc:
      'A portfolio website where all the information of a person is displayed. The portfolio is made using ReactJs',
    img: CavinImg,
  },
  {
    id: uuidv4(),
    name: 'Blood Donation Website',
    desc:
      'An application where people can donate, or collect blood according to blood group',
    img: ProjectImg,
  },
];

export default projects;
