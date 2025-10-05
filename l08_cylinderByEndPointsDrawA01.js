/* 
 * author : Nadeem Elahi
 * paid professional email: nad@3deem.com
 * free social media email: nadeem.elahi@gmail.com
 * tel : 905-481-1294
 * COPYRIGHT Sep 2025
 */

"use strict";

class CylinderByEndPointsDrawA01 extends CylinderByEndPoints {
	constructor ( res , rad , pt1 , pt2 ) {
		super ( res , rad , pt1 , pt2 ) ; 

		this.stepx = 0 ;
		this.stepy = 1 ;
		this.stepz = 0 ;

		this.colour = [ 0.2 , 1.0 , 1.0 , 1 ] ;
		this.loc = [ 0.25 , -1.5 , 0.0 ] ;

	}
}


