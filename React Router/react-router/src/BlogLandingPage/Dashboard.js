import * as React from "react";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Header from "./Header";
import MainFeaturedPost from "./MainFeaturedPost";
import FeaturedPost from "./FeaturedPost";
import Main from "./Main";
import post1 from "./blog-post.1.md";
import Sidebar from "./Sidebar";
import Footer from "./Footer";
import { sections } from "../utils/constants";
import { mainFeaturedPost } from "../utils/constants";
import { featuredPosts } from "../utils/constants";
import { sidebar } from "../utils/constants";

export default function Dashboard() {
  const posts = [post1];

  return (
    <>
      <Container maxWidth="lg">
        <Header title="Blog" sections={sections} />
        <main>
          <MainFeaturedPost post={mainFeaturedPost} />
          <Grid container spacing={4}>
            {featuredPosts.map((post) => (
              <FeaturedPost key={post.title} post={post} />
            ))}
          </Grid>
          <Grid container spacing={5} sx={{ mt: 3 }}>
            <Main title="From the firehose" posts={posts} />
            <Sidebar
              title={sidebar.title}
              description={sidebar.description}
              archives={sidebar.archives}
              social={sidebar.social}
            />
          </Grid>
        </main>
      </Container>
      <Footer
        title="Footer"
        description="Something here to give the footer a purpose!"
      />
    </>
  );
}
