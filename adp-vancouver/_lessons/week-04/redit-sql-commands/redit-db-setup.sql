CREATE TABLE "public"."users" (
  "userid" serial,
  "firstname" text,
  "lastname" text,
  "email" text,
  "password" text,
  PRIMARY KEY ("userid")
);

CREATE TABLE "public"."posts" (
  "postid" serial,
  "title" text,
  "link" text,
  "votes" integer,
  "description" text,
  PRIMARY KEY ("postid")
);

CREATE TABLE "public"."lessons" (
  "lessonid" serial,
  "title" text,
  "date" date,
  PRIMARY KEY ("lessonid")
);

CREATE TABLE "public"."tags" (
  "tagid" serial,
  "name" text,
  PRIMARY KEY ("tagid")
);

CREATE TABLE "public"."weeks" (
  "weekid" serial,
  "title" text,
  "date" date,
  PRIMARY KEY ("weekid")
);

CREATE TABLE "public"."posttags" (
  "postid" integer,
  "tagid" integer,
  CONSTRAINT "postid" FOREIGN KEY ("postid") REFERENCES "public"."posts"("postid") ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT "tagid" FOREIGN KEY ("tagid") REFERENCES "public"."tags"("tagid")
);

ALTER TABLE "public"."lessons"
  ADD COLUMN "weekid" integer,
  ADD CONSTRAINT "weekid" FOREIGN KEY ("weekid") REFERENCES "public"."weeks"("weekid") ON DELETE SET NULL ON UPDATE CASCADE;

ALTER TABLE "public"."posts"
  ADD COLUMN "userid" integer,
  ADD COLUMN "lessonid" integer,
  ADD CONSTRAINT "userid" FOREIGN KEY ("userid") REFERENCES "public"."users"("userid") ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT "lessonid" FOREIGN KEY ("lessonid") REFERENCES "public"."lessons"("lessonid") ON DELETE SET NULL ON UPDATE CASCADE;

