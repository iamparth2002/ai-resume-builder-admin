import type { Schema, Attribute } from '@strapi/strapi';

export interface EducationEducation extends Schema.Component {
  collectionName: 'components_education_educations';
  info: {
    displayName: 'Education';
    icon: 'book';
  };
  attributes: {
    universityName: Attribute.String;
    degree: Attribute.String;
    major: Attribute.String;
    startDate: Attribute.String;
    endDate: Attribute.String;
    description: Attribute.Text;
  };
}

export interface ExperienceExperience extends Schema.Component {
  collectionName: 'components_experience_experiences';
  info: {
    displayName: 'Experience';
    icon: 'cog';
    description: '';
  };
  attributes: {
    title: Attribute.Text;
    companyName: Attribute.Text;
    city: Attribute.Text;
    state: Attribute.Text;
    startDate: Attribute.Text;
    endDate: Attribute.Text;
    workSummery: Attribute.Text;
  };
}

export interface SkillsSkills extends Schema.Component {
  collectionName: 'components_skills_skills';
  info: {
    displayName: 'Skills';
    icon: 'briefcase';
  };
  attributes: {
    name: Attribute.String;
    rating: Attribute.Integer;
  };
}

export interface TestTest extends Schema.Component {
  collectionName: 'components_test_tests';
  info: {
    displayName: 'test';
    icon: 'book';
  };
  attributes: {
    test: Attribute.String;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'education.education': EducationEducation;
      'experience.experience': ExperienceExperience;
      'skills.skills': SkillsSkills;
      'test.test': TestTest;
    }
  }
}
