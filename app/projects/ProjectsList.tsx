"use client";

import React from "react";
import Link from "next/link";
import ImageWithSkeleton from "../components/ImageWithSkeleton";
import { ProjectDetail } from "../lib/projectsData";
import { useLiveContent } from "../lib/useLiveContent";

export default function ProjectsList({ fallbackProjects }: { fallbackProjects: ProjectDetail[] }) {
  const { projects: liveProjects } = useLiveContent();
  const displayProjects = liveProjects.length > 0 ? liveProjects : fallbackProjects;

  return (
    <div className="projects-cards-grid">
      {displayProjects.map((project) => (
        <Link
          key={project.id}
          href={`/projects/${project.id}`}
          className="project-card-item"
          style={{ textDecoration: "none" }}
        >
          <div className="project-card-img-wrapper">
            <ImageWithSkeleton
              src={project.mainImage}
              alt={`${project.title} - ${project.location} Interior Design by Parthu Interiors`}
            />
          </div>
          <div className="project-card-white-box">
            <h2 className="project-card-title">{project.title}</h2>
            <p className="project-card-location">{project.location}</p>
          </div>
        </Link>
      ))}
    </div>
  );
}
