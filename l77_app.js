/* 
 * author : Nadeem Elahi
 * paid professional email: nad@3deem.com
 * free social media email: nadeem.elahi@gmail.com
 * tel : 905-481-1294
 * COPYRIGHT Sep 2025
 */


"use strict;"
drawRotatingPrimitives();
function drawRotatingPrimitives() {
	ngl.init( "fsCanvas" ) ; //console.log( ngl.gl.getParameter( ngl.gl.MAX_VERTEX_ATTRIBS ) ); // 16

	var shader = ngl.shaderLamp;
	shader.compile();
	shader.use_program();

	var  idx 
		, triangleA01 = new TriangleDrawA01 ( ) 
		, ta01 = new ShaderLampMesh ( shader , triangleA01 ) 

		, quadA01 = new QuadDrawA01 ( ) 
		, qa01 = new ShaderLampMesh( shader , quadA01) 	

		, circleA01 = new CircleDrawA01 ( 10 ) 
		, cr01 = new ShaderLampMesh( shader , circleA01) 	

		, equilaterPyramidA01 = new EquilateralPyramidDrawA01 ( 10 ) 
		, eq01 = new ShaderLampMesh( shader , equilaterPyramidA01 ) 	

		, cubeA01 = new CubeDrawA01 ( ) 
		, cb01 = new ShaderLampMesh( shader , cubeA01) 	

		, resCone = 5

		, coneA01 = new ConeDrawA01 ( resCone ) 
		, cn01 = new ShaderLampMesh( shader , coneA01) 	

		, resCy = 9

		, cylinderA01 = new CylinderDrawA01 ( resCy ) 
		, cy01 = new ShaderLampMesh( shader , cylinderA01) 	

		, resCyep = 9
		, radCyep = 0.7
		, pt1 = [ -1.0 , -0.9 , 0.0 ]
		, pt2 = [  1.7 , -1.1 , 0.0 ]

		, cylinderByEndPointsA01 = new CylinderByEndPointsDrawA01 ( resCyep , radCyep , pt1 , pt2 ) 
		, cyep01 = new ShaderLampMesh( shader , cylinderByEndPointsA01) 	


		, resSllr = 13 
		, sphereLatLongRingsA01 = new SphereLatLongRingsDrawA01 ( resSllr ) 
		, sllr01 = new ShaderLampMesh( shader , sphereLatLongRingsA01) 	


		, resBs = 16 
		, ballSocketA01 = new BallSocketDrawA01 ( resBs ) 
		, bs01 = new ShaderLampMesh( shader , ballSocketA01) 	
		, olist = [
			triangleA01
			, quadA01
			, circleA01
			, equilaterPyramidA01
			, cubeA01
			, coneA01
			, cylinderA01
			, cylinderByEndPointsA01
			, sphereLatLongRingsA01
			, ballSocketA01
		] 
		, drawList = [  ta01  , qa01  , cr01 
			, eq01 , cb01 , cn01
			, cy01 , cyep01
			, sllr01 , bs01
		] 
		, len = olist.length
	;
				
	loadDrawData ( shader , drawList ) ;

	function draw () {

		for ( idx = 0 ; idx < len ; idx ++ ) {

			olist [ idx ] .update ( ) ;
			drawList [ idx ] .loadUniforms ( ) ;
			drawList [ idx ] .draw ( ) ;
		}
	}

	var ctm = 51 , rate = 50;
	this.tick = function ( dtm ){

		ctm += dtm ;

		if ( ctm > rate ) {
			draw () ;
			ctm = 0 ;
		};
	};
	T.add(this);
}
/*
		triangleA01.update ( ) ;
		ta01.loadUniforms();
		ta01.draw ();

		quadA01.update ( ) ;
		qa01.loadUniforms();
		qa01.draw ();

		circleA01.update ( ) ;
		cr01.loadUniforms();
		cr01.draw ();

		equilaterPyramidA01.update ( ) ;
		eq01.loadUniforms();
		eq01.draw ();

		cubeA01.update ( ) ;
		cb01.loadUniforms();
		cb01.draw ();

		coneA01.update ( ) ;
		cn01.loadUniforms();
		cn01.draw ();

		cylinderA01.update ( ) ;
		cy01.loadUniforms();
		cy01.draw ();

		cylinderByEndPointsA01.update ( ) ;
		cyep01.loadUniforms();
		cyep01.draw ();

		sphereLatLongRingsA01.update ( ) ;
		sllr01.loadUniforms();
		sllr01.draw ();

		ballSocketA01.update ( ) ;
		bs01.loadUniforms();
		bs01.draw ();
		*/
