ALTER TABLE "user" ALTER COLUMN "name" SET DEFAULT 'new user';--> statement-breakpoint
ALTER TABLE "user" ADD CONSTRAINT "user_email_unique" UNIQUE("email");