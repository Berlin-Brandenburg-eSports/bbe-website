import { Team } from '@bbe/types';
import { TeamModel } from '../models/team.model';

export default class TeamUtil {
  public static async getTeams(): Promise<Team[]> {
    return TeamModel.find().lean({ autopopulate: true });
  }

  public static async createTeam(data: Team): Promise<Team> {
    const team = await TeamModel.create(data);

    return team.toObject();
  }
}
