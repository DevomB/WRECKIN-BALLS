class block
{
	constructor(x,y,w,h)
	{
		var options={
		restitution : 0.8,
		friction : 1.0,
		density : 0.4,
		}
		this.x=x;
		this.y=y;
		this.w=w
		this.h=h
		this.body=Bodies.rectangle(x, y, w, h , options);
 		World.add(world, this.body);

	}
	display()
	{
			
			var groundPos=this.body.position;		
			var angle = this.body.angle
			push()
			translate(groundPos.x, groundPos.y);
			rotate(angle);
			rectMode(CENTER)
			//strokeWeight(4);
			fill(0,255,0)
			rect(0,0,this.w, this.h);
			pop()
			
	}

}