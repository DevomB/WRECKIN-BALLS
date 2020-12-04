class rope{
	constructor(point1,body1)
	{

		var options={
			pointA:point1,
			bodyB:body1,
			length:800
		}
		//console.log(options);
		this.rope=Constraint.create(options)
		World.add(world,this.rope)
	}

	display()
	{
		var pointA=this.rope.pointA;
		var pointB=this.rope.bodyB.position;

		strokeWeight(2);

		var Anchor1X=pointA.x
		var Anchor1Y=pointA.y

		var Anchor2X=pointB.x
		var Anchor2Y=pointB.y

		line(Anchor1X,Anchor1Y,Anchor2X,Anchor2Y);
	}

}