import { Translation } from './types';
export default {
  Header: {
    subtitle: 'Dobry sposób by ponarzekać zgodnie z duchem Agile',
    logout: 'Wyloguj',
    leave: 'Wyjdź',
    summaryMode: 'Tryb Podsumowania',
  },
  LanguagePicker: {
    header: 'Wybierz język',
  },
  Main: {
    hint: 'Możesz zaprosić inne osoby do tej sesji wysyłając im URL',
  },
  Post: {
    vote: 'głos',
    votes: 'głosów',
    deleteButton: 'Usuń',
    noContent: '(Ten wpis nie ma zawartości)',
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
    notWellQuestion: 'Co można poprawić?',
    wellQuestion: 'Co poszło dobrze?',
    ideasQuestion: 'Wspaniały pomysł którym chcesz się podzielić?',
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
    header: 'Są dziś z nami:',
  },
  Join: {
    welcome: 'Witaj w Retrospected',
    standardTab: {
      header: 'Stwórz',
      text: 'Kliknij poniżej i zacznij retrospektywę:',
      button: 'Stwórz nową sesję',
      customizeButton: undefined,
    },
    optionsTab: {
      header: 'Zaawansowane',
      input: 'Imię',
      button: 'Stwórz custom session',
    },
    previousTab: {
      header: 'Poprzednie',
      rejoinButton: 'Dołącz ponownie',
    },
  },
  Login: {
    namePlaceholder: 'Kim dokładnie jesteś? Wprowadź tu swoje imię',
    buttonLabel: 'Zacznijmy',
    header: 'Login',
  },
  SummaryBoard: {
    noPosts: 'Nie ma wpisów do wyświetlenia',
  },
  SessionName: {
    defaultSessionName: 'Moja Retrospektywa',
  },
  Invite: {
    inviteButton: 'Zaproś',
    dialog: {
      title: 'Zaproś ludzi do swojej retrospektywy',
      text:
        'By zaprosić ludzi do swojej retrospektywy, po prostu wyślij im ' +
        'następujący URL',
      copyButton: 'Skopiuj URL do Schowka',
    },
  },
  Generic: {
    ok: 'OK',
    cancel: 'Anuluj',
  },
  Actions: {
    tooltip: 'Utwórz akcję z tyłu tego elementu',
    label: 'Otwórz panel Akcja',
    summaryTitle: 'Twoje działania',
    title: 'Akcja',
  },
} as Translation;
