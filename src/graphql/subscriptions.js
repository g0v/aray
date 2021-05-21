/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateContribution = /* GraphQL */ `
  subscription OnCreateContribution {
    onCreateContribution {
      id
      username
      projectId
      projectTaskId
      summary
      description
      hours
      createdAt
      createdBy
      updatedAt
      updatedBy
    }
  }
`;
export const onUpdateContribution = /* GraphQL */ `
  subscription OnUpdateContribution {
    onUpdateContribution {
      id
      username
      projectId
      projectTaskId
      summary
      description
      hours
      createdAt
      createdBy
      updatedAt
      updatedBy
    }
  }
`;
export const onDeleteContribution = /* GraphQL */ `
  subscription OnDeleteContribution {
    onDeleteContribution {
      id
      username
      projectId
      projectTaskId
      summary
      description
      hours
      createdAt
      createdBy
      updatedAt
      updatedBy
    }
  }
`;
export const onCreateKeyword = /* GraphQL */ `
  subscription OnCreateKeyword {
    onCreateKeyword {
      id
      label
      users {
        items {
          id
          keywordId
          username
          keyword {
            id
            label
            createdAt
            updatedAt
          }
          user {
            username
            status
            name
            email
            selfIntroduction
            location
            slackId
            urlWebsite
            urlGithub
            urlLinkedIn
            urlFacebook
            urlTwitter
            urlInstagram
            totalCompletedHours
            totalCompletedTasks
            createdAt
            createdBy
            updatedAt
            updatedBy
          }
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateKeyword = /* GraphQL */ `
  subscription OnUpdateKeyword {
    onUpdateKeyword {
      id
      label
      users {
        items {
          id
          keywordId
          username
          keyword {
            id
            label
            createdAt
            updatedAt
          }
          user {
            username
            status
            name
            email
            selfIntroduction
            location
            slackId
            urlWebsite
            urlGithub
            urlLinkedIn
            urlFacebook
            urlTwitter
            urlInstagram
            totalCompletedHours
            totalCompletedTasks
            createdAt
            createdBy
            updatedAt
            updatedBy
          }
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteKeyword = /* GraphQL */ `
  subscription OnDeleteKeyword {
    onDeleteKeyword {
      id
      label
      users {
        items {
          id
          keywordId
          username
          keyword {
            id
            label
            createdAt
            updatedAt
          }
          user {
            username
            status
            name
            email
            selfIntroduction
            location
            slackId
            urlWebsite
            urlGithub
            urlLinkedIn
            urlFacebook
            urlTwitter
            urlInstagram
            totalCompletedHours
            totalCompletedTasks
            createdAt
            createdBy
            updatedAt
            updatedBy
          }
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onCreateNeed = /* GraphQL */ `
  subscription OnCreateNeed {
    onCreateNeed {
      id
      label
      projects {
        items {
          id
          projectId
          needId
          project {
            id
            status
            owner
            managers
            name
            summary
            description
            createdAt
            createdBy
            updatedAt
            updatedBy
          }
          need {
            id
            label
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateNeed = /* GraphQL */ `
  subscription OnUpdateNeed {
    onUpdateNeed {
      id
      label
      projects {
        items {
          id
          projectId
          needId
          project {
            id
            status
            owner
            managers
            name
            summary
            description
            createdAt
            createdBy
            updatedAt
            updatedBy
          }
          need {
            id
            label
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteNeed = /* GraphQL */ `
  subscription OnDeleteNeed {
    onDeleteNeed {
      id
      label
      projects {
        items {
          id
          projectId
          needId
          project {
            id
            status
            owner
            managers
            name
            summary
            description
            createdAt
            createdBy
            updatedAt
            updatedBy
          }
          need {
            id
            label
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onCreateProject = /* GraphQL */ `
  subscription OnCreateProject($owner: String, $managers: String) {
    onCreateProject(owner: $owner, managers: $managers) {
      id
      status
      owner
      managers
      name
      summary
      description
      links {
        name
        url
      }
      contributors {
        items {
          id
          projectId
          username
          project {
            id
            status
            owner
            managers
            name
            summary
            description
            createdAt
            createdBy
            updatedAt
            updatedBy
          }
          user {
            username
            status
            name
            email
            selfIntroduction
            location
            slackId
            urlWebsite
            urlGithub
            urlLinkedIn
            urlFacebook
            urlTwitter
            urlInstagram
            totalCompletedHours
            totalCompletedTasks
            createdAt
            createdBy
            updatedAt
            updatedBy
          }
          role
          completedHours
          completedTasks
          createdAt
          updatedAt
        }
        nextToken
      }
      tags {
        items {
          id
          projectId
          tagId
          project {
            id
            status
            owner
            managers
            name
            summary
            description
            createdAt
            createdBy
            updatedAt
            updatedBy
          }
          tag {
            id
            label
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
        nextToken
      }
      keywords {
        items {
          id
          projectId
          keywordId
          project {
            id
            status
            owner
            managers
            name
            summary
            description
            createdAt
            createdBy
            updatedAt
            updatedBy
          }
          keyword {
            id
            label
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
        nextToken
      }
      needs {
        items {
          id
          projectId
          needId
          project {
            id
            status
            owner
            managers
            name
            summary
            description
            createdAt
            createdBy
            updatedAt
            updatedBy
          }
          need {
            id
            label
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      createdBy
      updatedAt
      updatedBy
    }
  }
`;
export const onUpdateProject = /* GraphQL */ `
  subscription OnUpdateProject($owner: String, $managers: String) {
    onUpdateProject(owner: $owner, managers: $managers) {
      id
      status
      owner
      managers
      name
      summary
      description
      links {
        name
        url
      }
      contributors {
        items {
          id
          projectId
          username
          project {
            id
            status
            owner
            managers
            name
            summary
            description
            createdAt
            createdBy
            updatedAt
            updatedBy
          }
          user {
            username
            status
            name
            email
            selfIntroduction
            location
            slackId
            urlWebsite
            urlGithub
            urlLinkedIn
            urlFacebook
            urlTwitter
            urlInstagram
            totalCompletedHours
            totalCompletedTasks
            createdAt
            createdBy
            updatedAt
            updatedBy
          }
          role
          completedHours
          completedTasks
          createdAt
          updatedAt
        }
        nextToken
      }
      tags {
        items {
          id
          projectId
          tagId
          project {
            id
            status
            owner
            managers
            name
            summary
            description
            createdAt
            createdBy
            updatedAt
            updatedBy
          }
          tag {
            id
            label
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
        nextToken
      }
      keywords {
        items {
          id
          projectId
          keywordId
          project {
            id
            status
            owner
            managers
            name
            summary
            description
            createdAt
            createdBy
            updatedAt
            updatedBy
          }
          keyword {
            id
            label
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
        nextToken
      }
      needs {
        items {
          id
          projectId
          needId
          project {
            id
            status
            owner
            managers
            name
            summary
            description
            createdAt
            createdBy
            updatedAt
            updatedBy
          }
          need {
            id
            label
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      createdBy
      updatedAt
      updatedBy
    }
  }
`;
export const onDeleteProject = /* GraphQL */ `
  subscription OnDeleteProject($owner: String, $managers: String) {
    onDeleteProject(owner: $owner, managers: $managers) {
      id
      status
      owner
      managers
      name
      summary
      description
      links {
        name
        url
      }
      contributors {
        items {
          id
          projectId
          username
          project {
            id
            status
            owner
            managers
            name
            summary
            description
            createdAt
            createdBy
            updatedAt
            updatedBy
          }
          user {
            username
            status
            name
            email
            selfIntroduction
            location
            slackId
            urlWebsite
            urlGithub
            urlLinkedIn
            urlFacebook
            urlTwitter
            urlInstagram
            totalCompletedHours
            totalCompletedTasks
            createdAt
            createdBy
            updatedAt
            updatedBy
          }
          role
          completedHours
          completedTasks
          createdAt
          updatedAt
        }
        nextToken
      }
      tags {
        items {
          id
          projectId
          tagId
          project {
            id
            status
            owner
            managers
            name
            summary
            description
            createdAt
            createdBy
            updatedAt
            updatedBy
          }
          tag {
            id
            label
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
        nextToken
      }
      keywords {
        items {
          id
          projectId
          keywordId
          project {
            id
            status
            owner
            managers
            name
            summary
            description
            createdAt
            createdBy
            updatedAt
            updatedBy
          }
          keyword {
            id
            label
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
        nextToken
      }
      needs {
        items {
          id
          projectId
          needId
          project {
            id
            status
            owner
            managers
            name
            summary
            description
            createdAt
            createdBy
            updatedAt
            updatedBy
          }
          need {
            id
            label
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      createdBy
      updatedAt
      updatedBy
    }
  }
`;
export const onCreateProjectKeyword = /* GraphQL */ `
  subscription OnCreateProjectKeyword {
    onCreateProjectKeyword {
      id
      projectId
      keywordId
      project {
        id
        status
        owner
        managers
        name
        summary
        description
        links {
          name
          url
        }
        contributors {
          items {
            id
            projectId
            username
            role
            completedHours
            completedTasks
            createdAt
            updatedAt
          }
          nextToken
        }
        tags {
          items {
            id
            projectId
            tagId
            createdAt
            updatedAt
          }
          nextToken
        }
        keywords {
          items {
            id
            projectId
            keywordId
            createdAt
            updatedAt
          }
          nextToken
        }
        needs {
          items {
            id
            projectId
            needId
            createdAt
            updatedAt
          }
          nextToken
        }
        createdAt
        createdBy
        updatedAt
        updatedBy
      }
      keyword {
        id
        label
        users {
          items {
            id
            keywordId
            username
            createdAt
            updatedAt
          }
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateProjectKeyword = /* GraphQL */ `
  subscription OnUpdateProjectKeyword {
    onUpdateProjectKeyword {
      id
      projectId
      keywordId
      project {
        id
        status
        owner
        managers
        name
        summary
        description
        links {
          name
          url
        }
        contributors {
          items {
            id
            projectId
            username
            role
            completedHours
            completedTasks
            createdAt
            updatedAt
          }
          nextToken
        }
        tags {
          items {
            id
            projectId
            tagId
            createdAt
            updatedAt
          }
          nextToken
        }
        keywords {
          items {
            id
            projectId
            keywordId
            createdAt
            updatedAt
          }
          nextToken
        }
        needs {
          items {
            id
            projectId
            needId
            createdAt
            updatedAt
          }
          nextToken
        }
        createdAt
        createdBy
        updatedAt
        updatedBy
      }
      keyword {
        id
        label
        users {
          items {
            id
            keywordId
            username
            createdAt
            updatedAt
          }
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteProjectKeyword = /* GraphQL */ `
  subscription OnDeleteProjectKeyword {
    onDeleteProjectKeyword {
      id
      projectId
      keywordId
      project {
        id
        status
        owner
        managers
        name
        summary
        description
        links {
          name
          url
        }
        contributors {
          items {
            id
            projectId
            username
            role
            completedHours
            completedTasks
            createdAt
            updatedAt
          }
          nextToken
        }
        tags {
          items {
            id
            projectId
            tagId
            createdAt
            updatedAt
          }
          nextToken
        }
        keywords {
          items {
            id
            projectId
            keywordId
            createdAt
            updatedAt
          }
          nextToken
        }
        needs {
          items {
            id
            projectId
            needId
            createdAt
            updatedAt
          }
          nextToken
        }
        createdAt
        createdBy
        updatedAt
        updatedBy
      }
      keyword {
        id
        label
        users {
          items {
            id
            keywordId
            username
            createdAt
            updatedAt
          }
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const onCreateProjectNeed = /* GraphQL */ `
  subscription OnCreateProjectNeed {
    onCreateProjectNeed {
      id
      projectId
      needId
      project {
        id
        status
        owner
        managers
        name
        summary
        description
        links {
          name
          url
        }
        contributors {
          items {
            id
            projectId
            username
            role
            completedHours
            completedTasks
            createdAt
            updatedAt
          }
          nextToken
        }
        tags {
          items {
            id
            projectId
            tagId
            createdAt
            updatedAt
          }
          nextToken
        }
        keywords {
          items {
            id
            projectId
            keywordId
            createdAt
            updatedAt
          }
          nextToken
        }
        needs {
          items {
            id
            projectId
            needId
            createdAt
            updatedAt
          }
          nextToken
        }
        createdAt
        createdBy
        updatedAt
        updatedBy
      }
      need {
        id
        label
        projects {
          items {
            id
            projectId
            needId
            createdAt
            updatedAt
          }
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateProjectNeed = /* GraphQL */ `
  subscription OnUpdateProjectNeed {
    onUpdateProjectNeed {
      id
      projectId
      needId
      project {
        id
        status
        owner
        managers
        name
        summary
        description
        links {
          name
          url
        }
        contributors {
          items {
            id
            projectId
            username
            role
            completedHours
            completedTasks
            createdAt
            updatedAt
          }
          nextToken
        }
        tags {
          items {
            id
            projectId
            tagId
            createdAt
            updatedAt
          }
          nextToken
        }
        keywords {
          items {
            id
            projectId
            keywordId
            createdAt
            updatedAt
          }
          nextToken
        }
        needs {
          items {
            id
            projectId
            needId
            createdAt
            updatedAt
          }
          nextToken
        }
        createdAt
        createdBy
        updatedAt
        updatedBy
      }
      need {
        id
        label
        projects {
          items {
            id
            projectId
            needId
            createdAt
            updatedAt
          }
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteProjectNeed = /* GraphQL */ `
  subscription OnDeleteProjectNeed {
    onDeleteProjectNeed {
      id
      projectId
      needId
      project {
        id
        status
        owner
        managers
        name
        summary
        description
        links {
          name
          url
        }
        contributors {
          items {
            id
            projectId
            username
            role
            completedHours
            completedTasks
            createdAt
            updatedAt
          }
          nextToken
        }
        tags {
          items {
            id
            projectId
            tagId
            createdAt
            updatedAt
          }
          nextToken
        }
        keywords {
          items {
            id
            projectId
            keywordId
            createdAt
            updatedAt
          }
          nextToken
        }
        needs {
          items {
            id
            projectId
            needId
            createdAt
            updatedAt
          }
          nextToken
        }
        createdAt
        createdBy
        updatedAt
        updatedBy
      }
      need {
        id
        label
        projects {
          items {
            id
            projectId
            needId
            createdAt
            updatedAt
          }
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const onCreateProjectTag = /* GraphQL */ `
  subscription OnCreateProjectTag {
    onCreateProjectTag {
      id
      projectId
      tagId
      project {
        id
        status
        owner
        managers
        name
        summary
        description
        links {
          name
          url
        }
        contributors {
          items {
            id
            projectId
            username
            role
            completedHours
            completedTasks
            createdAt
            updatedAt
          }
          nextToken
        }
        tags {
          items {
            id
            projectId
            tagId
            createdAt
            updatedAt
          }
          nextToken
        }
        keywords {
          items {
            id
            projectId
            keywordId
            createdAt
            updatedAt
          }
          nextToken
        }
        needs {
          items {
            id
            projectId
            needId
            createdAt
            updatedAt
          }
          nextToken
        }
        createdAt
        createdBy
        updatedAt
        updatedBy
      }
      tag {
        id
        label
        projects {
          items {
            id
            projectId
            tagId
            createdAt
            updatedAt
          }
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateProjectTag = /* GraphQL */ `
  subscription OnUpdateProjectTag {
    onUpdateProjectTag {
      id
      projectId
      tagId
      project {
        id
        status
        owner
        managers
        name
        summary
        description
        links {
          name
          url
        }
        contributors {
          items {
            id
            projectId
            username
            role
            completedHours
            completedTasks
            createdAt
            updatedAt
          }
          nextToken
        }
        tags {
          items {
            id
            projectId
            tagId
            createdAt
            updatedAt
          }
          nextToken
        }
        keywords {
          items {
            id
            projectId
            keywordId
            createdAt
            updatedAt
          }
          nextToken
        }
        needs {
          items {
            id
            projectId
            needId
            createdAt
            updatedAt
          }
          nextToken
        }
        createdAt
        createdBy
        updatedAt
        updatedBy
      }
      tag {
        id
        label
        projects {
          items {
            id
            projectId
            tagId
            createdAt
            updatedAt
          }
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteProjectTag = /* GraphQL */ `
  subscription OnDeleteProjectTag {
    onDeleteProjectTag {
      id
      projectId
      tagId
      project {
        id
        status
        owner
        managers
        name
        summary
        description
        links {
          name
          url
        }
        contributors {
          items {
            id
            projectId
            username
            role
            completedHours
            completedTasks
            createdAt
            updatedAt
          }
          nextToken
        }
        tags {
          items {
            id
            projectId
            tagId
            createdAt
            updatedAt
          }
          nextToken
        }
        keywords {
          items {
            id
            projectId
            keywordId
            createdAt
            updatedAt
          }
          nextToken
        }
        needs {
          items {
            id
            projectId
            needId
            createdAt
            updatedAt
          }
          nextToken
        }
        createdAt
        createdBy
        updatedAt
        updatedBy
      }
      tag {
        id
        label
        projects {
          items {
            id
            projectId
            tagId
            createdAt
            updatedAt
          }
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const onCreateProjectTask = /* GraphQL */ `
  subscription OnCreateProjectTask {
    onCreateProjectTask {
      id
      projectId
      status
      summary
      description
      hours
      createdAt
      createdBy
      updatedAt
      updatedBy
    }
  }
`;
export const onUpdateProjectTask = /* GraphQL */ `
  subscription OnUpdateProjectTask {
    onUpdateProjectTask {
      id
      projectId
      status
      summary
      description
      hours
      createdAt
      createdBy
      updatedAt
      updatedBy
    }
  }
`;
export const onDeleteProjectTask = /* GraphQL */ `
  subscription OnDeleteProjectTask {
    onDeleteProjectTask {
      id
      projectId
      status
      summary
      description
      hours
      createdAt
      createdBy
      updatedAt
      updatedBy
    }
  }
`;
export const onCreateTag = /* GraphQL */ `
  subscription OnCreateTag {
    onCreateTag {
      id
      label
      projects {
        items {
          id
          projectId
          tagId
          project {
            id
            status
            owner
            managers
            name
            summary
            description
            createdAt
            createdBy
            updatedAt
            updatedBy
          }
          tag {
            id
            label
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateTag = /* GraphQL */ `
  subscription OnUpdateTag {
    onUpdateTag {
      id
      label
      projects {
        items {
          id
          projectId
          tagId
          project {
            id
            status
            owner
            managers
            name
            summary
            description
            createdAt
            createdBy
            updatedAt
            updatedBy
          }
          tag {
            id
            label
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteTag = /* GraphQL */ `
  subscription OnDeleteTag {
    onDeleteTag {
      id
      label
      projects {
        items {
          id
          projectId
          tagId
          project {
            id
            status
            owner
            managers
            name
            summary
            description
            createdAt
            createdBy
            updatedAt
            updatedBy
          }
          tag {
            id
            label
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser($username: String) {
    onCreateUser(username: $username) {
      username
      status
      name
      email
      selfIntroduction
      location
      slackId
      urlWebsite
      urlGithub
      urlLinkedIn
      urlFacebook
      urlTwitter
      urlInstagram
      totalCompletedHours
      totalCompletedTasks
      projects {
        items {
          id
          projectId
          username
          project {
            id
            status
            owner
            managers
            name
            summary
            description
            createdAt
            createdBy
            updatedAt
            updatedBy
          }
          user {
            username
            status
            name
            email
            selfIntroduction
            location
            slackId
            urlWebsite
            urlGithub
            urlLinkedIn
            urlFacebook
            urlTwitter
            urlInstagram
            totalCompletedHours
            totalCompletedTasks
            createdAt
            createdBy
            updatedAt
            updatedBy
          }
          role
          completedHours
          completedTasks
          createdAt
          updatedAt
        }
        nextToken
      }
      keywords {
        items {
          id
          keywordId
          username
          keyword {
            id
            label
            createdAt
            updatedAt
          }
          user {
            username
            status
            name
            email
            selfIntroduction
            location
            slackId
            urlWebsite
            urlGithub
            urlLinkedIn
            urlFacebook
            urlTwitter
            urlInstagram
            totalCompletedHours
            totalCompletedTasks
            createdAt
            createdBy
            updatedAt
            updatedBy
          }
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      createdBy
      updatedAt
      updatedBy
    }
  }
`;
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser($username: String) {
    onUpdateUser(username: $username) {
      username
      status
      name
      email
      selfIntroduction
      location
      slackId
      urlWebsite
      urlGithub
      urlLinkedIn
      urlFacebook
      urlTwitter
      urlInstagram
      totalCompletedHours
      totalCompletedTasks
      projects {
        items {
          id
          projectId
          username
          project {
            id
            status
            owner
            managers
            name
            summary
            description
            createdAt
            createdBy
            updatedAt
            updatedBy
          }
          user {
            username
            status
            name
            email
            selfIntroduction
            location
            slackId
            urlWebsite
            urlGithub
            urlLinkedIn
            urlFacebook
            urlTwitter
            urlInstagram
            totalCompletedHours
            totalCompletedTasks
            createdAt
            createdBy
            updatedAt
            updatedBy
          }
          role
          completedHours
          completedTasks
          createdAt
          updatedAt
        }
        nextToken
      }
      keywords {
        items {
          id
          keywordId
          username
          keyword {
            id
            label
            createdAt
            updatedAt
          }
          user {
            username
            status
            name
            email
            selfIntroduction
            location
            slackId
            urlWebsite
            urlGithub
            urlLinkedIn
            urlFacebook
            urlTwitter
            urlInstagram
            totalCompletedHours
            totalCompletedTasks
            createdAt
            createdBy
            updatedAt
            updatedBy
          }
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      createdBy
      updatedAt
      updatedBy
    }
  }
`;
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser($username: String) {
    onDeleteUser(username: $username) {
      username
      status
      name
      email
      selfIntroduction
      location
      slackId
      urlWebsite
      urlGithub
      urlLinkedIn
      urlFacebook
      urlTwitter
      urlInstagram
      totalCompletedHours
      totalCompletedTasks
      projects {
        items {
          id
          projectId
          username
          project {
            id
            status
            owner
            managers
            name
            summary
            description
            createdAt
            createdBy
            updatedAt
            updatedBy
          }
          user {
            username
            status
            name
            email
            selfIntroduction
            location
            slackId
            urlWebsite
            urlGithub
            urlLinkedIn
            urlFacebook
            urlTwitter
            urlInstagram
            totalCompletedHours
            totalCompletedTasks
            createdAt
            createdBy
            updatedAt
            updatedBy
          }
          role
          completedHours
          completedTasks
          createdAt
          updatedAt
        }
        nextToken
      }
      keywords {
        items {
          id
          keywordId
          username
          keyword {
            id
            label
            createdAt
            updatedAt
          }
          user {
            username
            status
            name
            email
            selfIntroduction
            location
            slackId
            urlWebsite
            urlGithub
            urlLinkedIn
            urlFacebook
            urlTwitter
            urlInstagram
            totalCompletedHours
            totalCompletedTasks
            createdAt
            createdBy
            updatedAt
            updatedBy
          }
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      createdBy
      updatedAt
      updatedBy
    }
  }
`;
export const onCreateUserKeyword = /* GraphQL */ `
  subscription OnCreateUserKeyword {
    onCreateUserKeyword {
      id
      keywordId
      username
      keyword {
        id
        label
        users {
          items {
            id
            keywordId
            username
            createdAt
            updatedAt
          }
          nextToken
        }
        createdAt
        updatedAt
      }
      user {
        username
        status
        name
        email
        selfIntroduction
        location
        slackId
        urlWebsite
        urlGithub
        urlLinkedIn
        urlFacebook
        urlTwitter
        urlInstagram
        totalCompletedHours
        totalCompletedTasks
        projects {
          items {
            id
            projectId
            username
            role
            completedHours
            completedTasks
            createdAt
            updatedAt
          }
          nextToken
        }
        keywords {
          items {
            id
            keywordId
            username
            createdAt
            updatedAt
          }
          nextToken
        }
        createdAt
        createdBy
        updatedAt
        updatedBy
      }
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateUserKeyword = /* GraphQL */ `
  subscription OnUpdateUserKeyword {
    onUpdateUserKeyword {
      id
      keywordId
      username
      keyword {
        id
        label
        users {
          items {
            id
            keywordId
            username
            createdAt
            updatedAt
          }
          nextToken
        }
        createdAt
        updatedAt
      }
      user {
        username
        status
        name
        email
        selfIntroduction
        location
        slackId
        urlWebsite
        urlGithub
        urlLinkedIn
        urlFacebook
        urlTwitter
        urlInstagram
        totalCompletedHours
        totalCompletedTasks
        projects {
          items {
            id
            projectId
            username
            role
            completedHours
            completedTasks
            createdAt
            updatedAt
          }
          nextToken
        }
        keywords {
          items {
            id
            keywordId
            username
            createdAt
            updatedAt
          }
          nextToken
        }
        createdAt
        createdBy
        updatedAt
        updatedBy
      }
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteUserKeyword = /* GraphQL */ `
  subscription OnDeleteUserKeyword {
    onDeleteUserKeyword {
      id
      keywordId
      username
      keyword {
        id
        label
        users {
          items {
            id
            keywordId
            username
            createdAt
            updatedAt
          }
          nextToken
        }
        createdAt
        updatedAt
      }
      user {
        username
        status
        name
        email
        selfIntroduction
        location
        slackId
        urlWebsite
        urlGithub
        urlLinkedIn
        urlFacebook
        urlTwitter
        urlInstagram
        totalCompletedHours
        totalCompletedTasks
        projects {
          items {
            id
            projectId
            username
            role
            completedHours
            completedTasks
            createdAt
            updatedAt
          }
          nextToken
        }
        keywords {
          items {
            id
            keywordId
            username
            createdAt
            updatedAt
          }
          nextToken
        }
        createdAt
        createdBy
        updatedAt
        updatedBy
      }
      createdAt
      updatedAt
    }
  }
`;
export const onCreateUserProject = /* GraphQL */ `
  subscription OnCreateUserProject {
    onCreateUserProject {
      id
      projectId
      username
      project {
        id
        status
        owner
        managers
        name
        summary
        description
        links {
          name
          url
        }
        contributors {
          items {
            id
            projectId
            username
            role
            completedHours
            completedTasks
            createdAt
            updatedAt
          }
          nextToken
        }
        tags {
          items {
            id
            projectId
            tagId
            createdAt
            updatedAt
          }
          nextToken
        }
        keywords {
          items {
            id
            projectId
            keywordId
            createdAt
            updatedAt
          }
          nextToken
        }
        needs {
          items {
            id
            projectId
            needId
            createdAt
            updatedAt
          }
          nextToken
        }
        createdAt
        createdBy
        updatedAt
        updatedBy
      }
      user {
        username
        status
        name
        email
        selfIntroduction
        location
        slackId
        urlWebsite
        urlGithub
        urlLinkedIn
        urlFacebook
        urlTwitter
        urlInstagram
        totalCompletedHours
        totalCompletedTasks
        projects {
          items {
            id
            projectId
            username
            role
            completedHours
            completedTasks
            createdAt
            updatedAt
          }
          nextToken
        }
        keywords {
          items {
            id
            keywordId
            username
            createdAt
            updatedAt
          }
          nextToken
        }
        createdAt
        createdBy
        updatedAt
        updatedBy
      }
      role
      completedHours
      completedTasks
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateUserProject = /* GraphQL */ `
  subscription OnUpdateUserProject {
    onUpdateUserProject {
      id
      projectId
      username
      project {
        id
        status
        owner
        managers
        name
        summary
        description
        links {
          name
          url
        }
        contributors {
          items {
            id
            projectId
            username
            role
            completedHours
            completedTasks
            createdAt
            updatedAt
          }
          nextToken
        }
        tags {
          items {
            id
            projectId
            tagId
            createdAt
            updatedAt
          }
          nextToken
        }
        keywords {
          items {
            id
            projectId
            keywordId
            createdAt
            updatedAt
          }
          nextToken
        }
        needs {
          items {
            id
            projectId
            needId
            createdAt
            updatedAt
          }
          nextToken
        }
        createdAt
        createdBy
        updatedAt
        updatedBy
      }
      user {
        username
        status
        name
        email
        selfIntroduction
        location
        slackId
        urlWebsite
        urlGithub
        urlLinkedIn
        urlFacebook
        urlTwitter
        urlInstagram
        totalCompletedHours
        totalCompletedTasks
        projects {
          items {
            id
            projectId
            username
            role
            completedHours
            completedTasks
            createdAt
            updatedAt
          }
          nextToken
        }
        keywords {
          items {
            id
            keywordId
            username
            createdAt
            updatedAt
          }
          nextToken
        }
        createdAt
        createdBy
        updatedAt
        updatedBy
      }
      role
      completedHours
      completedTasks
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteUserProject = /* GraphQL */ `
  subscription OnDeleteUserProject {
    onDeleteUserProject {
      id
      projectId
      username
      project {
        id
        status
        owner
        managers
        name
        summary
        description
        links {
          name
          url
        }
        contributors {
          items {
            id
            projectId
            username
            role
            completedHours
            completedTasks
            createdAt
            updatedAt
          }
          nextToken
        }
        tags {
          items {
            id
            projectId
            tagId
            createdAt
            updatedAt
          }
          nextToken
        }
        keywords {
          items {
            id
            projectId
            keywordId
            createdAt
            updatedAt
          }
          nextToken
        }
        needs {
          items {
            id
            projectId
            needId
            createdAt
            updatedAt
          }
          nextToken
        }
        createdAt
        createdBy
        updatedAt
        updatedBy
      }
      user {
        username
        status
        name
        email
        selfIntroduction
        location
        slackId
        urlWebsite
        urlGithub
        urlLinkedIn
        urlFacebook
        urlTwitter
        urlInstagram
        totalCompletedHours
        totalCompletedTasks
        projects {
          items {
            id
            projectId
            username
            role
            completedHours
            completedTasks
            createdAt
            updatedAt
          }
          nextToken
        }
        keywords {
          items {
            id
            keywordId
            username
            createdAt
            updatedAt
          }
          nextToken
        }
        createdAt
        createdBy
        updatedAt
        updatedBy
      }
      role
      completedHours
      completedTasks
      createdAt
      updatedAt
    }
  }
`;
