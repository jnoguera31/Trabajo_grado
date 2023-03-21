export class Project {
    public id: string =''
    public nombre: string= ''
    constructor (){}
    SetValues(item: any)
    
    {this.id = item.id
    this.nombre = item.name}
}
