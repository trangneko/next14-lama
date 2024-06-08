"use server";
import { revalidatePath } from "next/cache";
import { signIn } from "./auth";
import { Post, User } from "./models";
import { connectToDb } from "./utils";
import bcrypt from "bcryptjs";

export const addPost = async (formData) => {
  const { title, desc, slug, userId } = Object.fromEntries(formData);

  try {
    connectToDb();
    const newPost = new Post({ title, desc, slug, userId });

    await newPost.save();
    console.log(newPost);
    revalidatePath("/blog");
  } catch (err) {
    console.log(err);
    return { error: "Something went wrong!" };
  }
};

export const deletePost = async (formData) => {
  const { id } = Object.fromEntries(formData);

  try {
    connectToDb();

    await Post.findByIdAndDelete(id);
    console.log("deleted from db");
    revalidatePath("/blog");
  } catch (err) {
    console.log(err);
    return { error: "Something went wrong!" };
  }
};

export const handleGithubLogin = async () => {
  "use server";
  await signIn("github");
};

export const handleLogout = async () => {
  "use server";
  await signOut();
};

export const register = async (formData) => {
  const { username, email, password, img, passwordRepeat } =
    Object.fromEntries(formData);

  if (password != passwordRepeat) () => "Passwords do not match";

  try {
    connectToDb();

    const user = await User.findOne({ username });
    if (user) () => "Username already exists";
    const newUser = new User({
      username,
      email,
      password,
      img,
    });
    await newUser.save();
    console.log("saved to db");
    
  } catch (err) {
    return { error: "Something went wrong!" };
  }
};
