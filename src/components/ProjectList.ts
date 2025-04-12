import { useTranslation } from 'react-i18next';
import Note from '../assets/Note.svg';
import Pokemon from '../assets/Pokemon.svg';
import Hangman from '../assets/Hangman.svg';
import DivingDelights from '../assets/DivingDelights.svg';
import GardenPlanner from '../assets/Garden-planner.svg';
import Chappy from '../assets/chappy.svg';

const ProjectList = () => {
  const { t } = useTranslation();

  return [
    {
      title: "Garden Planner",
      image: GardenPlanner,
      description: t('projectDescriptionsGardenPlanner'),
      repo: "https://github.com/wilmaniklasson/garden-planner",
      demo: "https://wilmaniklasson.github.io/garden-planner/"
    },
    {
      title: "Chappy",
      image: Chappy,
      description: t('projectDescriptionsChappy'),
      repo: "https://github.com/wilmaniklasson/chat-app",
      demo: null
    },
    {
      title: "Diving Delights",
      image: DivingDelights,
      description: t('projectDescriptionsDivingDelights'),
      repo: "https://github.com/wilmaniklasson/Webbshop-divingdelights",
      demo: "https://wilmaniklasson.github.io/Webbshop-divingdelights/"
    },
    {
      title: "Notes",
      image: Note,
      description: t('projectDescriptionsNotes'),
      repo: "https://github.com/wilmaniklasson/Notes",
      demo: "https://wilmaniklasson.github.io/Notes/"
    },
    {
      title: "Pokémon team manager",
      image: Pokemon,
      description: t('projectDescriptionsPokemon'),
      repo: "https://github.com/wilmaniklasson/Poke_manager",
    demo: "https://wilmaniklasson.github.io/Poke_manager/"
    },
    {
      title: "Hangman",
      image: Hangman,
      description: t('projectDescriptionsHangman'),
      repo: "https://github.com/wilmaniklasson/Hangman",
      demo: "https://wilmaniklasson.github.io/Hangman/"
    },
  ];
};

export default ProjectList;
