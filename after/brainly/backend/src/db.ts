import mongoose from "mongoose";
import { Schema, Types, model } from "mongoose";

const DB_URL = "mongodb://localhost:27017";

mongoose
  .connect(DB_URL)
  .then(() => console.log("connected to db"))
  .catch((err) => {
    console.log("error occured,", err);
  });

type UserType = {
  username: string;
  password: string;
};

const UserSchema = new Schema<UserType>({
  username: {
    type: String,
    required: true,
    minlength: 8,
    maxlength: 15,
    unique: true,
  },
  password: { type: String, required: true, minlength: 8, maxlength: 12 },
});

enum TypeEnum {
  twitter = "twitter",
  reddit = "reddit",
  medium = "medium",
}

type ContentType = {
  link: string;
  type: string | TypeEnum;
  title: string;
  tags: Types.ObjectId[];
  userId: Types.ObjectId;
};

const ContentSchema = new Schema<ContentType>({
  link: { type: String, required: true },
  type: { type: String, enum: Object.values(TypeEnum), required: true },
  title: { type: String, required: true },
  tags: [{ type: Schema.Types.ObjectId, ref: "Tags", required: true }],
  userId: { type: Schema.Types.ObjectId, ref: "User", required: true },
});

type TagType = {
  title: string;
};

const TagSchema = new Schema<TagType>({
  title: { type: String, required: true },
});

type LinkType = {
  hash: string;
  userId: Types.ObjectId;
};

const LinkSchema = new Schema<LinkType>({
  hash: { type: String, required: true, unique: true },
  userId: { type: Schema.ObjectId, ref: "User", required: true },
});

const User = model<UserType>("User", UserSchema);
const Content = model<ContentType>("Content", ContentSchema);
const Tags = model<TagType>("Tags", TagSchema);
const Link = model<LinkType>("Link", LinkSchema);
