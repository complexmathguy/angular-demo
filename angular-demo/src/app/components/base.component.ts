import { HttpClient } from '@angular/common/http';
import * as enumTypes from '../models/EnumTypes';

import {PlayerService} from '../services/Player.service';
import {LeagueService} from '../services/League.service';
import {TournamentService} from '../services/Tournament.service';
import {MatchupService} from '../services/Matchup.service';
import {GameService} from '../services/Game.service';

/** 
	Base class of all Components.  
	For convenience, contains all enums and entity lists 
**/
export class BaseComponent {

    constructor (private http: HttpClient) {}

// enum instances
    TournamentTypes = Object.keys(enumTypes.TournamentType);

// all collection instances
    players : any;
    leagues : any;
    tournaments : any;
    matchups : any;
    games : any;
  
// initialization  
    ngOnInit() {
    }

    initPlayerList() {
        if ( this.players == null ) {
            new PlayerService(this.http).getPlayers().subscribe(res => {
                this.players = res;
            });
        }
    }
    
    initLeagueList() {
        if ( this.leagues == null ) {
            new LeagueService(this.http).getLeagues().subscribe(res => {
                this.leagues = res;
            });
        }
    }
    
    initTournamentList() {
        if ( this.tournaments == null ) {
            new TournamentService(this.http).getTournaments().subscribe(res => {
                this.tournaments = res;
            });
        }
    }
    
    initMatchupList() {
        if ( this.matchups == null ) {
            new MatchupService(this.http).getMatchups().subscribe(res => {
                this.matchups = res;
            });
        }
    }
    
    initGameList() {
        if ( this.games == null ) {
            new GameService(this.http).getGames().subscribe(res => {
                this.games = res;
            });
        }
    }
    
    
// comparison function for select controls  
    compareFn(user1: any, user2: any) {
        return user1 == user2
    }    
}
