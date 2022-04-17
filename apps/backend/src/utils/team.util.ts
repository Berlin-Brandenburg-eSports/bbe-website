import { Team } from '@bbe/types';
import { TeamModel } from '../models/team.model';

export default class TeamUtil {
  public static async getTeams(): Promise<Team[]> {
    return TeamModel.find().lean();
  }
}
