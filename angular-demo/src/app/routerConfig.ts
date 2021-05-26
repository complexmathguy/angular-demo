// routerConfig.ts

import { Routes } from '@angular/router';
import { CreatePlayerComponent } from './components/Player/create/create.component';
import { EditPlayerComponent } from './components/Player/edit/edit.component';
import { IndexPlayerComponent } from './components/Player/index/index.component';
import { CreateLeagueComponent } from './components/League/create/create.component';
import { EditLeagueComponent } from './components/League/edit/edit.component';
import { IndexLeagueComponent } from './components/League/index/index.component';
import { CreateTournamentComponent } from './components/Tournament/create/create.component';
import { EditTournamentComponent } from './components/Tournament/edit/edit.component';
import { IndexTournamentComponent } from './components/Tournament/index/index.component';
import { CreateMatchupComponent } from './components/Matchup/create/create.component';
import { EditMatchupComponent } from './components/Matchup/edit/edit.component';
import { IndexMatchupComponent } from './components/Matchup/index/index.component';
import { CreateGameComponent } from './components/Game/create/create.component';
import { EditGameComponent } from './components/Game/edit/edit.component';
import { IndexGameComponent } from './components/Game/index/index.component';

export const PlayerRoutes: Routes = [
  { path: 'createPlayer',
    component: CreatePlayerComponent
  },
  {
    path: 'editPlayer/:id',
    component: EditPlayerComponent
  },
  { path: 'indexPlayer',
    component: IndexPlayerComponent
  }
];
export const LeagueRoutes: Routes = [
  { path: 'createLeague',
    component: CreateLeagueComponent
  },
  {
    path: 'editLeague/:id',
    component: EditLeagueComponent
  },
  { path: 'indexLeague',
    component: IndexLeagueComponent
  }
];
export const TournamentRoutes: Routes = [
  { path: 'createTournament',
    component: CreateTournamentComponent
  },
  {
    path: 'editTournament/:id',
    component: EditTournamentComponent
  },
  { path: 'indexTournament',
    component: IndexTournamentComponent
  }
];
export const MatchupRoutes: Routes = [
  { path: 'createMatchup',
    component: CreateMatchupComponent
  },
  {
    path: 'editMatchup/:id',
    component: EditMatchupComponent
  },
  { path: 'indexMatchup',
    component: IndexMatchupComponent
  }
];
export const GameRoutes: Routes = [
  { path: 'createGame',
    component: CreateGameComponent
  },
  {
    path: 'editGame/:id',
    component: EditGameComponent
  },
  { path: 'indexGame',
    component: IndexGameComponent
  }
];
