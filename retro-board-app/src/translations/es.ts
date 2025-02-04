import { Translation } from './types';
export default {
  Header: {
    subtitle: 'Una buena manera de despotricar ordenadamente',
    logout: 'Cerrar sesión',
    leave: 'Salir',
    summaryMode: 'Modo resumido',
  },
  LanguagePicker: {
    header: 'Escoje un idioma',
  },
  Main: {
    hint: 'Puedes invitar a otros a esta sesión compartiendo la URL',
  },
  Post: {
    vote: 'vote',
    votes: 'votos',
    deleteButton: 'Suprimir',
    noContent: '(Esta publicacion no tiene contenido)',
    by: undefined,
  },
  Customize: {
    title: undefined,
    votingCategory: undefined,
    votingCategorySub: undefined,
    postCategory: undefined,
    postCategorySub: undefined,
    customTemplateCategory: undefined,
    customTemplateCategorySub: undefined,
    startButton: undefined,
    maxUpVotes: undefined,
    maxUpVotesHelp: undefined,
    maxDownVotes: undefined,
    maxDownVotesHelp: undefined,
    allowSelfVoting: undefined,
    allowSelfVotingHelp: undefined,
    allowMultipleVotes: undefined,
    allowMultipleVotesHelp: undefined,
    allowActions: undefined,
    allowActionsHelp: undefined,
    allowAuthorVisible: undefined,
    allowAuthorVisibleHelp: undefined,
    template: undefined,
    templateHelp: undefined,
    numberOfColumns: undefined,
    numberOfColumnsHelp: undefined,
  },
  PostBoard: {
    notWellQuestion: 'Qué se podría mejorar?',
    wellQuestion: 'Qué ha ido bien?',
    ideasQuestion: 'Una brillante idea que compartir?',
    startQuestion: undefined,
    stopQuestion: undefined,
    continueQuestion: undefined,
    likedQuestion: undefined,
    lackedQuestion: undefined,
    learnedQuestion: undefined,
    longedForQuestion: undefined,
    anchorQuestion: undefined,
    boatQuestion: undefined,
    islandQuestion: undefined,
    windQuestion: undefined,
    rockQuestion: undefined,
  },
  Template: {
    default: undefined,
    wellNotWell: undefined,
    startStopContinue: undefined,
    fourLs: undefined,
    sailboat: undefined,
  },
  Clients: {
    header: 'Acompañenos amablemente en este momento:',
  },
  Join: {
    welcome: 'Bienvenido a la retrospectiva',
    standardTab: {
      header: 'Crear una sesión',
      text: 'Pulse abajo y empieze la retrospectiva:',
      button: 'Crear una sesión nueva',
      customizeButton: undefined,
    },
    optionsTab: {
      header: 'Avanzado',
      input: 'inserte un nombre para su sesión',
      button: 'Crear una sesión personalizada',
    },
    previousTab: {
      header: 'Sesiones anteriores',
      rejoinButton: 'Reunirse',
    },
  },
  Login: {
    namePlaceholder: 'Quién eres exáctamente? Inserta tu nombre aquí',
    buttonLabel: 'Empezemos',
    header: 'Login',
  },
  SummaryBoard: {
    noPosts: 'No hay publicaciones que mostrar',
  },
  SessionName: {
    defaultSessionName: 'Mi retrospectiva',
  },
  Invite: {
    inviteButton: 'Invitar',
    dialog: {
      title: 'Invitar personas a tu retrospectiva',
      text:
        'Para invitar otras personas a tu retrospectiva, sencillamente enviales ' +
        'la siguiente URL.',
      copyButton: 'Copiar la URL al Portapapeles',
    },
  },
  Generic: {
    ok: 'Ok',
    cancel: 'Cancelar',
  },
  Actions: {
    tooltip: 'Crear una acción',
    label: 'Abre el panel de acción.',
    summaryTitle: 'Tus acciones',
    title: 'Acción',
  },
} as Translation;
