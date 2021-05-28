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
      createdAt
      createdBy
      updatedAt
      updatedBy
      users {
        items {
          id
          keywordId
          username
          createdAt
          createdBy
          updatedAt
          updatedBy
          keyword {
            id
            label
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
            timeZone
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
        }
        nextToken
      }
    }
  }
`;
export const onUpdateKeyword = /* GraphQL */ `
  subscription OnUpdateKeyword {
    onUpdateKeyword {
      id
      label
      createdAt
      createdBy
      updatedAt
      updatedBy
      users {
        items {
          id
          keywordId
          username
          createdAt
          createdBy
          updatedAt
          updatedBy
          keyword {
            id
            label
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
            timeZone
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
        }
        nextToken
      }
    }
  }
`;
export const onDeleteKeyword = /* GraphQL */ `
  subscription OnDeleteKeyword {
    onDeleteKeyword {
      id
      label
      createdAt
      createdBy
      updatedAt
      updatedBy
      users {
        items {
          id
          keywordId
          username
          createdAt
          createdBy
          updatedAt
          updatedBy
          keyword {
            id
            label
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
            timeZone
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
        }
        nextToken
      }
    }
  }
`;
export const onCreateNeed = /* GraphQL */ `
  subscription OnCreateNeed {
    onCreateNeed {
      id
      label
      createdAt
      createdBy
      updatedAt
      updatedBy
      projects {
        items {
          id
          projectId
          needId
          createdAt
          createdBy
          updatedAt
          updatedBy
          need {
            id
            label
            createdAt
            createdBy
            updatedAt
            updatedBy
          }
          project {
            id
            status
            owner
            managers
            name
            summary
            description
            totalCompletedHours
            totalCompletedTasks
            totalContributors
            createdAt
            createdBy
            updatedAt
            updatedBy
          }
        }
        nextToken
      }
    }
  }
`;
export const onUpdateNeed = /* GraphQL */ `
  subscription OnUpdateNeed {
    onUpdateNeed {
      id
      label
      createdAt
      createdBy
      updatedAt
      updatedBy
      projects {
        items {
          id
          projectId
          needId
          createdAt
          createdBy
          updatedAt
          updatedBy
          need {
            id
            label
            createdAt
            createdBy
            updatedAt
            updatedBy
          }
          project {
            id
            status
            owner
            managers
            name
            summary
            description
            totalCompletedHours
            totalCompletedTasks
            totalContributors
            createdAt
            createdBy
            updatedAt
            updatedBy
          }
        }
        nextToken
      }
    }
  }
`;
export const onDeleteNeed = /* GraphQL */ `
  subscription OnDeleteNeed {
    onDeleteNeed {
      id
      label
      createdAt
      createdBy
      updatedAt
      updatedBy
      projects {
        items {
          id
          projectId
          needId
          createdAt
          createdBy
          updatedAt
          updatedBy
          need {
            id
            label
            createdAt
            createdBy
            updatedAt
            updatedBy
          }
          project {
            id
            status
            owner
            managers
            name
            summary
            description
            totalCompletedHours
            totalCompletedTasks
            totalContributors
            createdAt
            createdBy
            updatedAt
            updatedBy
          }
        }
        nextToken
      }
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
        description
        url
      }
      totalCompletedHours
      totalCompletedTasks
      totalContributors
      createdAt
      createdBy
      updatedAt
      updatedBy
      keywords {
        items {
          id
          projectId
          keywordId
          createdAt
          createdBy
          updatedAt
          updatedBy
          keyword {
            id
            label
            createdAt
            createdBy
            updatedAt
            updatedBy
          }
          project {
            id
            status
            owner
            managers
            name
            summary
            description
            totalCompletedHours
            totalCompletedTasks
            totalContributors
            createdAt
            createdBy
            updatedAt
            updatedBy
          }
        }
        nextToken
      }
      needs {
        items {
          id
          projectId
          needId
          createdAt
          createdBy
          updatedAt
          updatedBy
          need {
            id
            label
            createdAt
            createdBy
            updatedAt
            updatedBy
          }
          project {
            id
            status
            owner
            managers
            name
            summary
            description
            totalCompletedHours
            totalCompletedTasks
            totalContributors
            createdAt
            createdBy
            updatedAt
            updatedBy
          }
        }
        nextToken
      }
      tags {
        items {
          id
          projectId
          tagId
          createdAt
          createdBy
          updatedAt
          updatedBy
          project {
            id
            status
            owner
            managers
            name
            summary
            description
            totalCompletedHours
            totalCompletedTasks
            totalContributors
            createdAt
            createdBy
            updatedAt
            updatedBy
          }
          tag {
            id
            label
            createdAt
            createdBy
            updatedAt
            updatedBy
          }
        }
        nextToken
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
          createdBy
          updatedAt
          updatedBy
          project {
            id
            status
            owner
            managers
            name
            summary
            description
            totalCompletedHours
            totalCompletedTasks
            totalContributors
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
            timeZone
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
        }
        nextToken
      }
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
        description
        url
      }
      totalCompletedHours
      totalCompletedTasks
      totalContributors
      createdAt
      createdBy
      updatedAt
      updatedBy
      keywords {
        items {
          id
          projectId
          keywordId
          createdAt
          createdBy
          updatedAt
          updatedBy
          keyword {
            id
            label
            createdAt
            createdBy
            updatedAt
            updatedBy
          }
          project {
            id
            status
            owner
            managers
            name
            summary
            description
            totalCompletedHours
            totalCompletedTasks
            totalContributors
            createdAt
            createdBy
            updatedAt
            updatedBy
          }
        }
        nextToken
      }
      needs {
        items {
          id
          projectId
          needId
          createdAt
          createdBy
          updatedAt
          updatedBy
          need {
            id
            label
            createdAt
            createdBy
            updatedAt
            updatedBy
          }
          project {
            id
            status
            owner
            managers
            name
            summary
            description
            totalCompletedHours
            totalCompletedTasks
            totalContributors
            createdAt
            createdBy
            updatedAt
            updatedBy
          }
        }
        nextToken
      }
      tags {
        items {
          id
          projectId
          tagId
          createdAt
          createdBy
          updatedAt
          updatedBy
          project {
            id
            status
            owner
            managers
            name
            summary
            description
            totalCompletedHours
            totalCompletedTasks
            totalContributors
            createdAt
            createdBy
            updatedAt
            updatedBy
          }
          tag {
            id
            label
            createdAt
            createdBy
            updatedAt
            updatedBy
          }
        }
        nextToken
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
          createdBy
          updatedAt
          updatedBy
          project {
            id
            status
            owner
            managers
            name
            summary
            description
            totalCompletedHours
            totalCompletedTasks
            totalContributors
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
            timeZone
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
        }
        nextToken
      }
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
        description
        url
      }
      totalCompletedHours
      totalCompletedTasks
      totalContributors
      createdAt
      createdBy
      updatedAt
      updatedBy
      keywords {
        items {
          id
          projectId
          keywordId
          createdAt
          createdBy
          updatedAt
          updatedBy
          keyword {
            id
            label
            createdAt
            createdBy
            updatedAt
            updatedBy
          }
          project {
            id
            status
            owner
            managers
            name
            summary
            description
            totalCompletedHours
            totalCompletedTasks
            totalContributors
            createdAt
            createdBy
            updatedAt
            updatedBy
          }
        }
        nextToken
      }
      needs {
        items {
          id
          projectId
          needId
          createdAt
          createdBy
          updatedAt
          updatedBy
          need {
            id
            label
            createdAt
            createdBy
            updatedAt
            updatedBy
          }
          project {
            id
            status
            owner
            managers
            name
            summary
            description
            totalCompletedHours
            totalCompletedTasks
            totalContributors
            createdAt
            createdBy
            updatedAt
            updatedBy
          }
        }
        nextToken
      }
      tags {
        items {
          id
          projectId
          tagId
          createdAt
          createdBy
          updatedAt
          updatedBy
          project {
            id
            status
            owner
            managers
            name
            summary
            description
            totalCompletedHours
            totalCompletedTasks
            totalContributors
            createdAt
            createdBy
            updatedAt
            updatedBy
          }
          tag {
            id
            label
            createdAt
            createdBy
            updatedAt
            updatedBy
          }
        }
        nextToken
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
          createdBy
          updatedAt
          updatedBy
          project {
            id
            status
            owner
            managers
            name
            summary
            description
            totalCompletedHours
            totalCompletedTasks
            totalContributors
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
            timeZone
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
        }
        nextToken
      }
    }
  }
`;
export const onCreateProjectKeyword = /* GraphQL */ `
  subscription OnCreateProjectKeyword {
    onCreateProjectKeyword {
      id
      projectId
      keywordId
      createdAt
      createdBy
      updatedAt
      updatedBy
      keyword {
        id
        label
        createdAt
        createdBy
        updatedAt
        updatedBy
        users {
          items {
            id
            keywordId
            username
            createdAt
            createdBy
            updatedAt
            updatedBy
          }
          nextToken
        }
      }
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
          description
          url
        }
        totalCompletedHours
        totalCompletedTasks
        totalContributors
        createdAt
        createdBy
        updatedAt
        updatedBy
        keywords {
          items {
            id
            projectId
            keywordId
            createdAt
            createdBy
            updatedAt
            updatedBy
          }
          nextToken
        }
        needs {
          items {
            id
            projectId
            needId
            createdAt
            createdBy
            updatedAt
            updatedBy
          }
          nextToken
        }
        tags {
          items {
            id
            projectId
            tagId
            createdAt
            createdBy
            updatedAt
            updatedBy
          }
          nextToken
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
            createdBy
            updatedAt
            updatedBy
          }
          nextToken
        }
      }
    }
  }
`;
export const onUpdateProjectKeyword = /* GraphQL */ `
  subscription OnUpdateProjectKeyword {
    onUpdateProjectKeyword {
      id
      projectId
      keywordId
      createdAt
      createdBy
      updatedAt
      updatedBy
      keyword {
        id
        label
        createdAt
        createdBy
        updatedAt
        updatedBy
        users {
          items {
            id
            keywordId
            username
            createdAt
            createdBy
            updatedAt
            updatedBy
          }
          nextToken
        }
      }
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
          description
          url
        }
        totalCompletedHours
        totalCompletedTasks
        totalContributors
        createdAt
        createdBy
        updatedAt
        updatedBy
        keywords {
          items {
            id
            projectId
            keywordId
            createdAt
            createdBy
            updatedAt
            updatedBy
          }
          nextToken
        }
        needs {
          items {
            id
            projectId
            needId
            createdAt
            createdBy
            updatedAt
            updatedBy
          }
          nextToken
        }
        tags {
          items {
            id
            projectId
            tagId
            createdAt
            createdBy
            updatedAt
            updatedBy
          }
          nextToken
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
            createdBy
            updatedAt
            updatedBy
          }
          nextToken
        }
      }
    }
  }
`;
export const onDeleteProjectKeyword = /* GraphQL */ `
  subscription OnDeleteProjectKeyword {
    onDeleteProjectKeyword {
      id
      projectId
      keywordId
      createdAt
      createdBy
      updatedAt
      updatedBy
      keyword {
        id
        label
        createdAt
        createdBy
        updatedAt
        updatedBy
        users {
          items {
            id
            keywordId
            username
            createdAt
            createdBy
            updatedAt
            updatedBy
          }
          nextToken
        }
      }
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
          description
          url
        }
        totalCompletedHours
        totalCompletedTasks
        totalContributors
        createdAt
        createdBy
        updatedAt
        updatedBy
        keywords {
          items {
            id
            projectId
            keywordId
            createdAt
            createdBy
            updatedAt
            updatedBy
          }
          nextToken
        }
        needs {
          items {
            id
            projectId
            needId
            createdAt
            createdBy
            updatedAt
            updatedBy
          }
          nextToken
        }
        tags {
          items {
            id
            projectId
            tagId
            createdAt
            createdBy
            updatedAt
            updatedBy
          }
          nextToken
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
            createdBy
            updatedAt
            updatedBy
          }
          nextToken
        }
      }
    }
  }
`;
export const onCreateProjectNeed = /* GraphQL */ `
  subscription OnCreateProjectNeed {
    onCreateProjectNeed {
      id
      projectId
      needId
      createdAt
      createdBy
      updatedAt
      updatedBy
      need {
        id
        label
        createdAt
        createdBy
        updatedAt
        updatedBy
        projects {
          items {
            id
            projectId
            needId
            createdAt
            createdBy
            updatedAt
            updatedBy
          }
          nextToken
        }
      }
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
          description
          url
        }
        totalCompletedHours
        totalCompletedTasks
        totalContributors
        createdAt
        createdBy
        updatedAt
        updatedBy
        keywords {
          items {
            id
            projectId
            keywordId
            createdAt
            createdBy
            updatedAt
            updatedBy
          }
          nextToken
        }
        needs {
          items {
            id
            projectId
            needId
            createdAt
            createdBy
            updatedAt
            updatedBy
          }
          nextToken
        }
        tags {
          items {
            id
            projectId
            tagId
            createdAt
            createdBy
            updatedAt
            updatedBy
          }
          nextToken
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
            createdBy
            updatedAt
            updatedBy
          }
          nextToken
        }
      }
    }
  }
`;
export const onUpdateProjectNeed = /* GraphQL */ `
  subscription OnUpdateProjectNeed {
    onUpdateProjectNeed {
      id
      projectId
      needId
      createdAt
      createdBy
      updatedAt
      updatedBy
      need {
        id
        label
        createdAt
        createdBy
        updatedAt
        updatedBy
        projects {
          items {
            id
            projectId
            needId
            createdAt
            createdBy
            updatedAt
            updatedBy
          }
          nextToken
        }
      }
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
          description
          url
        }
        totalCompletedHours
        totalCompletedTasks
        totalContributors
        createdAt
        createdBy
        updatedAt
        updatedBy
        keywords {
          items {
            id
            projectId
            keywordId
            createdAt
            createdBy
            updatedAt
            updatedBy
          }
          nextToken
        }
        needs {
          items {
            id
            projectId
            needId
            createdAt
            createdBy
            updatedAt
            updatedBy
          }
          nextToken
        }
        tags {
          items {
            id
            projectId
            tagId
            createdAt
            createdBy
            updatedAt
            updatedBy
          }
          nextToken
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
            createdBy
            updatedAt
            updatedBy
          }
          nextToken
        }
      }
    }
  }
`;
export const onDeleteProjectNeed = /* GraphQL */ `
  subscription OnDeleteProjectNeed {
    onDeleteProjectNeed {
      id
      projectId
      needId
      createdAt
      createdBy
      updatedAt
      updatedBy
      need {
        id
        label
        createdAt
        createdBy
        updatedAt
        updatedBy
        projects {
          items {
            id
            projectId
            needId
            createdAt
            createdBy
            updatedAt
            updatedBy
          }
          nextToken
        }
      }
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
          description
          url
        }
        totalCompletedHours
        totalCompletedTasks
        totalContributors
        createdAt
        createdBy
        updatedAt
        updatedBy
        keywords {
          items {
            id
            projectId
            keywordId
            createdAt
            createdBy
            updatedAt
            updatedBy
          }
          nextToken
        }
        needs {
          items {
            id
            projectId
            needId
            createdAt
            createdBy
            updatedAt
            updatedBy
          }
          nextToken
        }
        tags {
          items {
            id
            projectId
            tagId
            createdAt
            createdBy
            updatedAt
            updatedBy
          }
          nextToken
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
            createdBy
            updatedAt
            updatedBy
          }
          nextToken
        }
      }
    }
  }
`;
export const onCreateProjectTag = /* GraphQL */ `
  subscription OnCreateProjectTag {
    onCreateProjectTag {
      id
      projectId
      tagId
      createdAt
      createdBy
      updatedAt
      updatedBy
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
          description
          url
        }
        totalCompletedHours
        totalCompletedTasks
        totalContributors
        createdAt
        createdBy
        updatedAt
        updatedBy
        keywords {
          items {
            id
            projectId
            keywordId
            createdAt
            createdBy
            updatedAt
            updatedBy
          }
          nextToken
        }
        needs {
          items {
            id
            projectId
            needId
            createdAt
            createdBy
            updatedAt
            updatedBy
          }
          nextToken
        }
        tags {
          items {
            id
            projectId
            tagId
            createdAt
            createdBy
            updatedAt
            updatedBy
          }
          nextToken
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
            createdBy
            updatedAt
            updatedBy
          }
          nextToken
        }
      }
      tag {
        id
        label
        createdAt
        createdBy
        updatedAt
        updatedBy
        projects {
          items {
            id
            projectId
            tagId
            createdAt
            createdBy
            updatedAt
            updatedBy
          }
          nextToken
        }
      }
    }
  }
`;
export const onUpdateProjectTag = /* GraphQL */ `
  subscription OnUpdateProjectTag {
    onUpdateProjectTag {
      id
      projectId
      tagId
      createdAt
      createdBy
      updatedAt
      updatedBy
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
          description
          url
        }
        totalCompletedHours
        totalCompletedTasks
        totalContributors
        createdAt
        createdBy
        updatedAt
        updatedBy
        keywords {
          items {
            id
            projectId
            keywordId
            createdAt
            createdBy
            updatedAt
            updatedBy
          }
          nextToken
        }
        needs {
          items {
            id
            projectId
            needId
            createdAt
            createdBy
            updatedAt
            updatedBy
          }
          nextToken
        }
        tags {
          items {
            id
            projectId
            tagId
            createdAt
            createdBy
            updatedAt
            updatedBy
          }
          nextToken
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
            createdBy
            updatedAt
            updatedBy
          }
          nextToken
        }
      }
      tag {
        id
        label
        createdAt
        createdBy
        updatedAt
        updatedBy
        projects {
          items {
            id
            projectId
            tagId
            createdAt
            createdBy
            updatedAt
            updatedBy
          }
          nextToken
        }
      }
    }
  }
`;
export const onDeleteProjectTag = /* GraphQL */ `
  subscription OnDeleteProjectTag {
    onDeleteProjectTag {
      id
      projectId
      tagId
      createdAt
      createdBy
      updatedAt
      updatedBy
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
          description
          url
        }
        totalCompletedHours
        totalCompletedTasks
        totalContributors
        createdAt
        createdBy
        updatedAt
        updatedBy
        keywords {
          items {
            id
            projectId
            keywordId
            createdAt
            createdBy
            updatedAt
            updatedBy
          }
          nextToken
        }
        needs {
          items {
            id
            projectId
            needId
            createdAt
            createdBy
            updatedAt
            updatedBy
          }
          nextToken
        }
        tags {
          items {
            id
            projectId
            tagId
            createdAt
            createdBy
            updatedAt
            updatedBy
          }
          nextToken
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
            createdBy
            updatedAt
            updatedBy
          }
          nextToken
        }
      }
      tag {
        id
        label
        createdAt
        createdBy
        updatedAt
        updatedBy
        projects {
          items {
            id
            projectId
            tagId
            createdAt
            createdBy
            updatedAt
            updatedBy
          }
          nextToken
        }
      }
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
export const onCreateStatement = /* GraphQL */ `
  subscription OnCreateStatement {
    onCreateStatement {
      id
      username
      type
      date
      totalCompletedHours
      totalCompletedTasks
      completedHours
      completedTasks
      createdAt
      createdBy
      updatedAt
      updatedBy
    }
  }
`;
export const onUpdateStatement = /* GraphQL */ `
  subscription OnUpdateStatement {
    onUpdateStatement {
      id
      username
      type
      date
      totalCompletedHours
      totalCompletedTasks
      completedHours
      completedTasks
      createdAt
      createdBy
      updatedAt
      updatedBy
    }
  }
`;
export const onDeleteStatement = /* GraphQL */ `
  subscription OnDeleteStatement {
    onDeleteStatement {
      id
      username
      type
      date
      totalCompletedHours
      totalCompletedTasks
      completedHours
      completedTasks
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
      createdAt
      createdBy
      updatedAt
      updatedBy
      projects {
        items {
          id
          projectId
          tagId
          createdAt
          createdBy
          updatedAt
          updatedBy
          project {
            id
            status
            owner
            managers
            name
            summary
            description
            totalCompletedHours
            totalCompletedTasks
            totalContributors
            createdAt
            createdBy
            updatedAt
            updatedBy
          }
          tag {
            id
            label
            createdAt
            createdBy
            updatedAt
            updatedBy
          }
        }
        nextToken
      }
    }
  }
`;
export const onUpdateTag = /* GraphQL */ `
  subscription OnUpdateTag {
    onUpdateTag {
      id
      label
      createdAt
      createdBy
      updatedAt
      updatedBy
      projects {
        items {
          id
          projectId
          tagId
          createdAt
          createdBy
          updatedAt
          updatedBy
          project {
            id
            status
            owner
            managers
            name
            summary
            description
            totalCompletedHours
            totalCompletedTasks
            totalContributors
            createdAt
            createdBy
            updatedAt
            updatedBy
          }
          tag {
            id
            label
            createdAt
            createdBy
            updatedAt
            updatedBy
          }
        }
        nextToken
      }
    }
  }
`;
export const onDeleteTag = /* GraphQL */ `
  subscription OnDeleteTag {
    onDeleteTag {
      id
      label
      createdAt
      createdBy
      updatedAt
      updatedBy
      projects {
        items {
          id
          projectId
          tagId
          createdAt
          createdBy
          updatedAt
          updatedBy
          project {
            id
            status
            owner
            managers
            name
            summary
            description
            totalCompletedHours
            totalCompletedTasks
            totalContributors
            createdAt
            createdBy
            updatedAt
            updatedBy
          }
          tag {
            id
            label
            createdAt
            createdBy
            updatedAt
            updatedBy
          }
        }
        nextToken
      }
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
      timeZone
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
      keywords {
        items {
          id
          keywordId
          username
          createdAt
          createdBy
          updatedAt
          updatedBy
          keyword {
            id
            label
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
            timeZone
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
        }
        nextToken
      }
      needs {
        items {
          id
          needId
          username
          createdAt
          createdBy
          updatedAt
          updatedBy
          need {
            id
            label
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
            timeZone
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
        }
        nextToken
      }
      projects {
        items {
          id
          projectId
          username
          role
          completedHours
          completedTasks
          createdAt
          createdBy
          updatedAt
          updatedBy
          project {
            id
            status
            owner
            managers
            name
            summary
            description
            totalCompletedHours
            totalCompletedTasks
            totalContributors
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
            timeZone
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
        }
        nextToken
      }
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
      timeZone
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
      keywords {
        items {
          id
          keywordId
          username
          createdAt
          createdBy
          updatedAt
          updatedBy
          keyword {
            id
            label
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
            timeZone
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
        }
        nextToken
      }
      needs {
        items {
          id
          needId
          username
          createdAt
          createdBy
          updatedAt
          updatedBy
          need {
            id
            label
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
            timeZone
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
        }
        nextToken
      }
      projects {
        items {
          id
          projectId
          username
          role
          completedHours
          completedTasks
          createdAt
          createdBy
          updatedAt
          updatedBy
          project {
            id
            status
            owner
            managers
            name
            summary
            description
            totalCompletedHours
            totalCompletedTasks
            totalContributors
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
            timeZone
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
        }
        nextToken
      }
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
      timeZone
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
      keywords {
        items {
          id
          keywordId
          username
          createdAt
          createdBy
          updatedAt
          updatedBy
          keyword {
            id
            label
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
            timeZone
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
        }
        nextToken
      }
      needs {
        items {
          id
          needId
          username
          createdAt
          createdBy
          updatedAt
          updatedBy
          need {
            id
            label
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
            timeZone
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
        }
        nextToken
      }
      projects {
        items {
          id
          projectId
          username
          role
          completedHours
          completedTasks
          createdAt
          createdBy
          updatedAt
          updatedBy
          project {
            id
            status
            owner
            managers
            name
            summary
            description
            totalCompletedHours
            totalCompletedTasks
            totalContributors
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
            timeZone
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
        }
        nextToken
      }
    }
  }
`;
export const onCreateUserKeyword = /* GraphQL */ `
  subscription OnCreateUserKeyword {
    onCreateUserKeyword {
      id
      keywordId
      username
      createdAt
      createdBy
      updatedAt
      updatedBy
      keyword {
        id
        label
        createdAt
        createdBy
        updatedAt
        updatedBy
        users {
          items {
            id
            keywordId
            username
            createdAt
            createdBy
            updatedAt
            updatedBy
          }
          nextToken
        }
      }
      user {
        username
        status
        name
        email
        selfIntroduction
        location
        timeZone
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
        keywords {
          items {
            id
            keywordId
            username
            createdAt
            createdBy
            updatedAt
            updatedBy
          }
          nextToken
        }
        needs {
          items {
            id
            needId
            username
            createdAt
            createdBy
            updatedAt
            updatedBy
          }
          nextToken
        }
        projects {
          items {
            id
            projectId
            username
            role
            completedHours
            completedTasks
            createdAt
            createdBy
            updatedAt
            updatedBy
          }
          nextToken
        }
      }
    }
  }
`;
export const onUpdateUserKeyword = /* GraphQL */ `
  subscription OnUpdateUserKeyword {
    onUpdateUserKeyword {
      id
      keywordId
      username
      createdAt
      createdBy
      updatedAt
      updatedBy
      keyword {
        id
        label
        createdAt
        createdBy
        updatedAt
        updatedBy
        users {
          items {
            id
            keywordId
            username
            createdAt
            createdBy
            updatedAt
            updatedBy
          }
          nextToken
        }
      }
      user {
        username
        status
        name
        email
        selfIntroduction
        location
        timeZone
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
        keywords {
          items {
            id
            keywordId
            username
            createdAt
            createdBy
            updatedAt
            updatedBy
          }
          nextToken
        }
        needs {
          items {
            id
            needId
            username
            createdAt
            createdBy
            updatedAt
            updatedBy
          }
          nextToken
        }
        projects {
          items {
            id
            projectId
            username
            role
            completedHours
            completedTasks
            createdAt
            createdBy
            updatedAt
            updatedBy
          }
          nextToken
        }
      }
    }
  }
`;
export const onDeleteUserKeyword = /* GraphQL */ `
  subscription OnDeleteUserKeyword {
    onDeleteUserKeyword {
      id
      keywordId
      username
      createdAt
      createdBy
      updatedAt
      updatedBy
      keyword {
        id
        label
        createdAt
        createdBy
        updatedAt
        updatedBy
        users {
          items {
            id
            keywordId
            username
            createdAt
            createdBy
            updatedAt
            updatedBy
          }
          nextToken
        }
      }
      user {
        username
        status
        name
        email
        selfIntroduction
        location
        timeZone
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
        keywords {
          items {
            id
            keywordId
            username
            createdAt
            createdBy
            updatedAt
            updatedBy
          }
          nextToken
        }
        needs {
          items {
            id
            needId
            username
            createdAt
            createdBy
            updatedAt
            updatedBy
          }
          nextToken
        }
        projects {
          items {
            id
            projectId
            username
            role
            completedHours
            completedTasks
            createdAt
            createdBy
            updatedAt
            updatedBy
          }
          nextToken
        }
      }
    }
  }
`;
export const onCreateUserNeed = /* GraphQL */ `
  subscription OnCreateUserNeed {
    onCreateUserNeed {
      id
      needId
      username
      createdAt
      createdBy
      updatedAt
      updatedBy
      need {
        id
        label
        createdAt
        createdBy
        updatedAt
        updatedBy
        projects {
          items {
            id
            projectId
            needId
            createdAt
            createdBy
            updatedAt
            updatedBy
          }
          nextToken
        }
      }
      user {
        username
        status
        name
        email
        selfIntroduction
        location
        timeZone
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
        keywords {
          items {
            id
            keywordId
            username
            createdAt
            createdBy
            updatedAt
            updatedBy
          }
          nextToken
        }
        needs {
          items {
            id
            needId
            username
            createdAt
            createdBy
            updatedAt
            updatedBy
          }
          nextToken
        }
        projects {
          items {
            id
            projectId
            username
            role
            completedHours
            completedTasks
            createdAt
            createdBy
            updatedAt
            updatedBy
          }
          nextToken
        }
      }
    }
  }
`;
export const onUpdateUserNeed = /* GraphQL */ `
  subscription OnUpdateUserNeed {
    onUpdateUserNeed {
      id
      needId
      username
      createdAt
      createdBy
      updatedAt
      updatedBy
      need {
        id
        label
        createdAt
        createdBy
        updatedAt
        updatedBy
        projects {
          items {
            id
            projectId
            needId
            createdAt
            createdBy
            updatedAt
            updatedBy
          }
          nextToken
        }
      }
      user {
        username
        status
        name
        email
        selfIntroduction
        location
        timeZone
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
        keywords {
          items {
            id
            keywordId
            username
            createdAt
            createdBy
            updatedAt
            updatedBy
          }
          nextToken
        }
        needs {
          items {
            id
            needId
            username
            createdAt
            createdBy
            updatedAt
            updatedBy
          }
          nextToken
        }
        projects {
          items {
            id
            projectId
            username
            role
            completedHours
            completedTasks
            createdAt
            createdBy
            updatedAt
            updatedBy
          }
          nextToken
        }
      }
    }
  }
`;
export const onDeleteUserNeed = /* GraphQL */ `
  subscription OnDeleteUserNeed {
    onDeleteUserNeed {
      id
      needId
      username
      createdAt
      createdBy
      updatedAt
      updatedBy
      need {
        id
        label
        createdAt
        createdBy
        updatedAt
        updatedBy
        projects {
          items {
            id
            projectId
            needId
            createdAt
            createdBy
            updatedAt
            updatedBy
          }
          nextToken
        }
      }
      user {
        username
        status
        name
        email
        selfIntroduction
        location
        timeZone
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
        keywords {
          items {
            id
            keywordId
            username
            createdAt
            createdBy
            updatedAt
            updatedBy
          }
          nextToken
        }
        needs {
          items {
            id
            needId
            username
            createdAt
            createdBy
            updatedAt
            updatedBy
          }
          nextToken
        }
        projects {
          items {
            id
            projectId
            username
            role
            completedHours
            completedTasks
            createdAt
            createdBy
            updatedAt
            updatedBy
          }
          nextToken
        }
      }
    }
  }
`;
export const onCreateUserProject = /* GraphQL */ `
  subscription OnCreateUserProject {
    onCreateUserProject {
      id
      projectId
      username
      role
      completedHours
      completedTasks
      createdAt
      createdBy
      updatedAt
      updatedBy
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
          description
          url
        }
        totalCompletedHours
        totalCompletedTasks
        totalContributors
        createdAt
        createdBy
        updatedAt
        updatedBy
        keywords {
          items {
            id
            projectId
            keywordId
            createdAt
            createdBy
            updatedAt
            updatedBy
          }
          nextToken
        }
        needs {
          items {
            id
            projectId
            needId
            createdAt
            createdBy
            updatedAt
            updatedBy
          }
          nextToken
        }
        tags {
          items {
            id
            projectId
            tagId
            createdAt
            createdBy
            updatedAt
            updatedBy
          }
          nextToken
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
            createdBy
            updatedAt
            updatedBy
          }
          nextToken
        }
      }
      user {
        username
        status
        name
        email
        selfIntroduction
        location
        timeZone
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
        keywords {
          items {
            id
            keywordId
            username
            createdAt
            createdBy
            updatedAt
            updatedBy
          }
          nextToken
        }
        needs {
          items {
            id
            needId
            username
            createdAt
            createdBy
            updatedAt
            updatedBy
          }
          nextToken
        }
        projects {
          items {
            id
            projectId
            username
            role
            completedHours
            completedTasks
            createdAt
            createdBy
            updatedAt
            updatedBy
          }
          nextToken
        }
      }
    }
  }
`;
export const onUpdateUserProject = /* GraphQL */ `
  subscription OnUpdateUserProject {
    onUpdateUserProject {
      id
      projectId
      username
      role
      completedHours
      completedTasks
      createdAt
      createdBy
      updatedAt
      updatedBy
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
          description
          url
        }
        totalCompletedHours
        totalCompletedTasks
        totalContributors
        createdAt
        createdBy
        updatedAt
        updatedBy
        keywords {
          items {
            id
            projectId
            keywordId
            createdAt
            createdBy
            updatedAt
            updatedBy
          }
          nextToken
        }
        needs {
          items {
            id
            projectId
            needId
            createdAt
            createdBy
            updatedAt
            updatedBy
          }
          nextToken
        }
        tags {
          items {
            id
            projectId
            tagId
            createdAt
            createdBy
            updatedAt
            updatedBy
          }
          nextToken
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
            createdBy
            updatedAt
            updatedBy
          }
          nextToken
        }
      }
      user {
        username
        status
        name
        email
        selfIntroduction
        location
        timeZone
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
        keywords {
          items {
            id
            keywordId
            username
            createdAt
            createdBy
            updatedAt
            updatedBy
          }
          nextToken
        }
        needs {
          items {
            id
            needId
            username
            createdAt
            createdBy
            updatedAt
            updatedBy
          }
          nextToken
        }
        projects {
          items {
            id
            projectId
            username
            role
            completedHours
            completedTasks
            createdAt
            createdBy
            updatedAt
            updatedBy
          }
          nextToken
        }
      }
    }
  }
`;
export const onDeleteUserProject = /* GraphQL */ `
  subscription OnDeleteUserProject {
    onDeleteUserProject {
      id
      projectId
      username
      role
      completedHours
      completedTasks
      createdAt
      createdBy
      updatedAt
      updatedBy
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
          description
          url
        }
        totalCompletedHours
        totalCompletedTasks
        totalContributors
        createdAt
        createdBy
        updatedAt
        updatedBy
        keywords {
          items {
            id
            projectId
            keywordId
            createdAt
            createdBy
            updatedAt
            updatedBy
          }
          nextToken
        }
        needs {
          items {
            id
            projectId
            needId
            createdAt
            createdBy
            updatedAt
            updatedBy
          }
          nextToken
        }
        tags {
          items {
            id
            projectId
            tagId
            createdAt
            createdBy
            updatedAt
            updatedBy
          }
          nextToken
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
            createdBy
            updatedAt
            updatedBy
          }
          nextToken
        }
      }
      user {
        username
        status
        name
        email
        selfIntroduction
        location
        timeZone
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
        keywords {
          items {
            id
            keywordId
            username
            createdAt
            createdBy
            updatedAt
            updatedBy
          }
          nextToken
        }
        needs {
          items {
            id
            needId
            username
            createdAt
            createdBy
            updatedAt
            updatedBy
          }
          nextToken
        }
        projects {
          items {
            id
            projectId
            username
            role
            completedHours
            completedTasks
            createdAt
            createdBy
            updatedAt
            updatedBy
          }
          nextToken
        }
      }
    }
  }
`;
