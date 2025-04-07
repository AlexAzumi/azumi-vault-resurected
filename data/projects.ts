import { Project } from '../pages/api/project';

const PROJECTS = [
  {
    title: 'Medal of Darkness',
    description:
      'Videojuego para la ayuda de la compresión lectora y razonamiento lógico del jugador',
    imageURL: '/images/projects/medal-of-darkness.webp',
    url: null,
  },
  {
    title: 'Healthy Catching',
    description: 'Juego educativo para dispositivos Android',
    imageURL: '/images/projects/healthy-catching.webp',
    url: 'https://healthycatching.netlify.app/',
  },
  {
    title: 'az! player',
    description: 'Reproductor de música para todas tus canciones de osu!',
    imageURL: '/images/projects/az-player.webp',
    url: 'https://az-player.netlify.app/',
  },
  {
    title: 'WebP Converter',
    description:
      'Aplicación de escritorio que convierte imágenes .webp a .jpg o .png y viceversa',
    imageURL: '/images/projects/webp-converter.webp',
    url: 'https://github.com/AlexAzumi/webp-converter',
  },
  {
    title: 'X-Ray Explorer VR',
    description: 'Aplicación de realidad virtual enfocada en el aprendizaje del esqueleto humano como su composición y estructura',
    imageURL: '/images/projects/x-ray-explorer-vr.webp'
  }
] as Project[];

export default PROJECTS.reverse();
