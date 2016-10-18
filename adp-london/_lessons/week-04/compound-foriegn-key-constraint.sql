create table userpostvotes (
	"userid" integer not null,
	"postid" integer not null,
	 CONSTRAINT "userid" FOREIGN KEY ("userid") REFERENCES "public"."users"("userid") ON DELETE NO ACTION ON UPDATE CASCADE,
	 CONSTRAINT "postid" FOREIGN KEY ("postid") REFERENCES "public"."posts"("postid") ON DELETE NO ACTION ON UPDATE CASCADE,
	 CONSTRAINT "userpostvotes_pkey" PRIMARY KEY ("postid", "userid")
);
