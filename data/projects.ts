import { Project } from '../pages/api/project';

const PROJECTS = [
  {
    title: 'Medal of Darkness',
    description:
      'Videojuego para la ayuda de la compresión lectora y razonamiento lógico del jugador',
    imageURL: '/images/projects/medalofdarkness.jpg',
    url: null,
  },
  {
    title: 'Healthy Catching',
    description: 'Juego educativo para dispositivos Android',
    imageURL: '/images/projects/healthycatching.jpg',
    url: 'https://healthycatching.netlify.app/',
  },
  {
    title: 'az! player',
    description:
      'Reproductor de música para todas tus canciones del juego rítmico llamado osu!',
    imageURL: '/images/projects/az-player.jpg',
    url: 'https://az-player.netlify.app/',
  },
] as Project[];

export default PROJECTS.reverse();
