import { Injectable } from '@angular/core';
import { DatabaseConnection } from './database-connection';
import { Planeta } from '../../models/planeta';

@Injectable()
export class PlanetaDao {

  constructor(public con: DatabaseConnection) { }

  createTable(): Promise<any> {
    const sql = "CREATE TABLE IF NOT EXISTS planeta (id INTEGER PRIMARY KEY AUTOINCREMENT, nombre VARCHAR, gravedad FLOAT)";
    return this.con.execute(sql, []);
  }

  insert(planeta: Planeta): Promise<number> {
    const sql = "INSERT INTO planeta (nombre, gravedad) VALUES (?,?)";
    return this.con.execute(sql, [planeta.nombre, planeta.gravedad]).then(result => {
      return Promise.resolve(result.insertId);
    });
  }

  update(planeta: Planeta): Promise<any> {
    const sql = "UPDATE planeta SET nombre = ?, gravedad = ? WHERE id = ?";
    return this.con.execute(sql, [planeta.nombre, planeta.gravedad, planeta.id]);
  }

  delete(id: number): Promise<any> {
    const sql = "DELETE FROM planeta WHERE id = ?";
    return this.con.execute(sql, [id]);
  }

  getById(id: number): Promise<Planeta> {
    const sql = "SELECT * FROM planeta WHERE id = ?";
    return this.con.execute(sql, [id]).then(result => {
      let planeta: Planeta = null;

      if (result.rows.length > 0) {
        planeta = result.rows.item(0);
      }

      return Promise.resolve(planeta);
    });
  }

  all(): Promise<Planeta[]> {
    const sql = "SELECT * FROM planeta";
    return this.con.execute(sql, []).then(result => {
      let planetas = [];
      for (let i = 0; i < result.rows.length; i++) {
        let planeta = result.rows.item(i);
        planetas.push(planeta);
      }
      return Promise.resolve(planetas);

    });

  }








}
