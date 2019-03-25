export class Quote {
    public showDetails: boolean;
    constructor(public voteup:number, public votedown:number, public thequote:string, public author:string, public publisher:string, public postDate:Date){
        this.showDetails = false;
    }
}