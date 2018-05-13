export class LikeComponent{
    constructor (public likeCount: number, public isSelected: boolean){
    }

    onClick(){
        if(this.isSelected){
            this.likeCount--;
        }
        else{
            this.likeCount++;
        }
        this.isSelected = !this.isSelected;
    }
}

export class anotherLikeComponent{
    constructor(private _likeCount: number, private _isSelected: boolean){
    }
    onClick(){
        if(this._isSelected){
            this._likeCount--;
        }
        else{
            this._likeCount++;
        }
        this._isSelected = !this._isSelected;
    }
    get likeCount(){
        return this._likeCount;
    }
    get isSelected(){
        return this._isSelected;
    }
}