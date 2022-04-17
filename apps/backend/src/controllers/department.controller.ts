import { Role } from '@bbe/types';
import { RequestHandler } from 'express';
import DepartmentUtil from '../utils/department.util';
import Controller from './base.controller';

export default class DepartmentController extends Controller {
  public setupRouter(): void {
    this.createRoute(`/departments`).get(this.getDepartments).post(this.createDepartment).all(this.notAllowed);
  }

  private getDepartments: RequestHandler = async (_req, res, next) => {
    try {
      const departments = await DepartmentUtil.getDepartments();
      res.send(departments);
    } catch (error) {
      next(error);
    }
  };

  private createDepartment: RequestHandler = async (req, res, next) => {
    try {
      this.getUser(req, Role.Board);
      const data = req.body;

      const department = await DepartmentUtil.createDepartment(data);

      res.send(department);
    } catch (error) {
      next(error);
    }
  };
}
