import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import 'bootstrap/dist/css/bootstrap.min.css';


class Input extends React.Component
{
  render()
  {
    return(
      <input type="text"/>
    );
  }
}
        
class Label extends React.Component
{
  render()
  {
    //console.log();
    return(
      <div className = {this.props.className}>
        <label>
          {this.props.etiqueta}
          <Input />
        </label>
      </div>
    );
  }
}

class Boton extends React.Component
{
  render()
  {
    return(
      <button type="button" class="btn btn-primary">{this.props.etiqueta}</button>
    );
  }
}

class LoginForm extends React.Component
{
  render()
  {
    return(
        <div className = {this.props.className}>
            <div class="panel-body">
                Sing Up!!
            </div>
            <div class="panel-footer">
                <Label etiqueta='User:' className='lbl-container'/>
                <Label etiqueta='Password:' className='lbl-container'/>
                <Boton etiqueta='Login'/>
            </div>
        </div>
    );
  }
}

class Tabla extends React.Component
{
  render()
  {
    return(
        <div className='tbl-container'>
          <table>
            <thead>
              <tr>
                {this.props.tableColumns}
              </tr>
            </thead>
            <tbody>
                {this.props.tableRows}
            </tbody>
          </table>
        </div>
    );
  }
}

class SPA extends React.Component
{
  render()
  {
    return(
      <div id="spa-container">
        <LoginForm className='login panel panel-primary'/>
        <br/>
        <div>
            <Label etiqueta='Find:' className='lbl-container'/>
            <Tabla tableColumns={this.props.tableColumns} tableRows={this.props.tableRows}/>
        </div>
      </div>
    );
  }
}

const columnas = ["NAME", "LASTNAME"];
const tableColumns = columnas.map((columna) => <th>{columna}</th>);

const rows = [['Miguel', 'Angel'],['Razo', 'Salas'],['Otro','Otro']];
const tableRows = rows.map((row) => <tr> {row.map((r) => <td>{r}</td>)}</tr>);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<SPA tableColumns={tableColumns} tableRows={tableRows}/>);