import { Role } from '@bbe/types';
import { RequestHandler } from 'express';
import { isAuthenticated } from '../middlewares/auth.middleware';
import DepartmentUtil from '../utils/department.util';
import Controller from './base.controller';

export default class DepartmentController extends Controller {
  public setupRouter(): void {
    this.createRoute(`/departments`).get(this.getDepartments).post(isAuthenticated(Role.Board), this.createDepartment).all(this.notAllowed);
    this.createRoute('/departments/:slug').delete(isAuthenticated(Role.Board), this.deleteDepartment).all(this.notAllowed);
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
      const data = req.body;
      const department = await DepartmentUtil.createDepartment(data);

      res.send(department);
    } catch (error) {
      next(error);
    }
  };

  private deleteDepartment: RequestHandler = async (req, res, next) => {
    try {
      const { slug } = req.params;
      const department = await DepartmentUtil.deleteDepartment(slug);

      res.send(department);
    } catch (error) {
      next(error);
    }
  };
}
