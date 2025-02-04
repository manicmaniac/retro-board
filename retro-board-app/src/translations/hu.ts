import { Translation } from './types';
export default {
  Header: {
    subtitle: 'Panaszkodjunk rendezetten',
    logout: 'Kijelentkezés',
    leave: 'Távozás',
    summaryMode: 'Összesített mód',
  },
  LanguagePicker: {
    header: 'Válassz nyelvet',
  },
  Main: {
    hint: 'Ha meg akarsz hívni másokat, másold ki és oszd meg velük az URL-t',
  },
  Post: {
    vote: 'szavazat',
    votes: 'szavazat',
    deleteButton: 'törlés',
    noContent: '(This post has no content)',
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
    notWellQuestion: 'Mit lehetne jobban csinálni?',
    wellQuestion: 'Mit ment jól?',
    ideasQuestion: 'Van valami nagyszerű ötleted?',
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
    header: 'Jelenleg itt van:',
  },
  Join: {
    welcome: 'Üdv, ez itt a Retrospected',
    standardTab: {
      header: 'Ülés létrehozása',
      text: 'Kattints ide a kezdéshez:',
      button: 'Új ülés indítása',
      customizeButton: undefined,
    },
    optionsTab: {
      header: 'Haladó',
      input: 'Adj nevet az ülésnek',
      button: 'Ülés létrehozása',
    },
    previousTab: {
      header: 'Previous sessions',
      rejoinButton: 'Rejoin',
    },
  },
  Login: {
    namePlaceholder: 'Hogy is hívnak? Kérlek írd ide a nevedet',
    buttonLabel: 'Kezdjük',
    header: 'Login',
  },
  SummaryBoard: {
    noPosts: 'There are no posts to display',
  },
  SessionName: {
    defaultSessionName: 'My Retrospective',
  },
  Invite: {
    inviteButton: 'Invite',
    dialog: {
      title: 'Invite people to your retrospective',
      text:
        'To invite people to your retrospected session, simply send them ' +
        'the following URL',
      copyButton: 'Copy URL to Clipboard',
    },
  },
  Generic: {
    ok: 'OK',
    cancel: 'Megszünteti',
  },
  Actions: {
    tooltip: 'Hozzon létre egy műveletet az elem hátoldalán',
    label: 'Nyissa meg a Művelet panelt',
    summaryTitle: 'Az Ön tevékenységei',
    title: 'Akció',
  },
} as Translation;
