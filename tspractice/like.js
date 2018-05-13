"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var LikeComponent = /** @class */ (function () {
    function LikeComponent(likeCount, isSelected) {
        this.likeCount = likeCount;
        this.isSelected = isSelected;
    }
    LikeComponent.prototype.onClick = function () {
        if (this.isSelected) {
            this.likeCount--;
        }
        else {
            this.likeCount++;
        }
        this.isSelected = !this.isSelected;
    };
    return LikeComponent;
}());
exports.LikeComponent = LikeComponent;
var anotherLikeComponent = /** @class */ (function () {
    function anotherLikeComponent(_likeCount, _isSelected) {
        this._likeCount = _likeCount;
        this._isSelected = _isSelected;
    }
    anotherLikeComponent.prototype.onClick = function () {
        if (this._isSelected) {
            this._likeCount--;
        }
        else {
            this._likeCount++;
        }
        this._isSelected = !this._isSelected;
    };
    Object.defineProperty(anotherLikeComponent.prototype, "likeCount", {
        get: function () {
            return this._likeCount;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(anotherLikeComponent.prototype, "isSelected", {
        get: function () {
            return this._isSelected;
        },
        enumerable: true,
        configurable: true
    });
    return anotherLikeComponent;
}());
exports.anotherLikeComponent = anotherLikeComponent;
