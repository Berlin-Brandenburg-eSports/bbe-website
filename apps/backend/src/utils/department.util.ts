import { Department } from '@bbe/types';
import { DeleteResult } from 'mongodb';
import { DepartmentModel } from '../models/department.model';

export default class DepartmentUtil {
  public static async getDepartments(): Promise<Department[]> {
    return DepartmentModel.find().lean();
  }

  public static async createDepartment(data: Department): Promise<Department> {
    const department = await DepartmentModel.create(data);

    return department.toJSON();
  }

  public static async deleteDepartment(slug: Department['slug']): Promise<DeleteResult> {
    return DepartmentModel.deleteOne({ slug });
  }
}
