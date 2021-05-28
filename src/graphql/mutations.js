/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createOrUpdateProject = /* GraphQL */ `
  mutation CreateOrUpdateProject($input: CreateOrUpdateProjectRequest!) {
    createOrUpdateProject(input: $input) {
      id
    }
  }
`;
export const createOrUpdateProjectContributions = /* GraphQL */ `
  mutation CreateOrUpdateProjectContributions(
    $input: CreateOrUpdateProjectContributionsRequest!
  ) {
    createOrUpdateProjectContributions(input: $input) {
      data
    }
  }
`;
export const createContribution = /* GraphQL */ `
  mutation CreateContribution(
    $input: CreateContributionInput!
    $condition: ModelContributionConditionInput
  ) {
    createContribution(input: $input, condition: $condition) {
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
export const updateContribution = /* GraphQL */ `
  mutation UpdateContribution(
    $input: UpdateContributionInput!
    $condition: ModelContributionConditionInput
  ) {
    updateContribution(input: $input, condition: $condition) {
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
export const deleteContribution = /* GraphQL */ `
  mutation DeleteContribution(
    $input: DeleteContributionInput!
    $condition: ModelContributionConditionInput
  ) {
    deleteContribution(input: $input, condition: $condition) {
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
export const createKeyword = /* GraphQL */ `
  mutation CreateKeyword(
    $input: CreateKeywordInput!
    $condition: ModelKeywordConditionInput
  ) {
    createKeyword(input: $input, condition: $condition) {
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
export const updateKeyword = /* GraphQL */ `
  mutation UpdateKeyword(
    $input: UpdateKeywordInput!
    $condition: ModelKeywordConditionInput
  ) {
    updateKeyword(input: $input, condition: $condition) {
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
export const deleteKeyword = /* GraphQL */ `
  mutation DeleteKeyword(
    $input: DeleteKeywordInput!
    $condition: ModelKeywordConditionInput
  ) {
    deleteKeyword(input: $input, condition: $condition) {
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
export const createNeed = /* GraphQL */ `
  mutation CreateNeed(
    $input: CreateNeedInput!
    $condition: ModelNeedConditionInput
  ) {
    createNeed(input: $input, condition: $condition) {
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
export const updateNeed = /* GraphQL */ `
  mutation UpdateNeed(
    $input: UpdateNeedInput!
    $condition: ModelNeedConditionInput
  ) {
    updateNeed(input: $input, condition: $condition) {
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
export const deleteNeed = /* GraphQL */ `
  mutation DeleteNeed(
    $input: DeleteNeedInput!
    $condition: ModelNeedConditionInput
  ) {
    deleteNeed(input: $input, condition: $condition) {
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
export const createProject = /* GraphQL */ `
  mutation CreateProject(
    $input: CreateProjectInput!
    $condition: ModelProjectConditionInput
  ) {
    createProject(input: $input, condition: $condition) {
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
export const updateProject = /* GraphQL */ `
  mutation UpdateProject(
    $input: UpdateProjectInput!
    $condition: ModelProjectConditionInput
  ) {
    updateProject(input: $input, condition: $condition) {
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
export const deleteProject = /* GraphQL */ `
  mutation DeleteProject(
    $input: DeleteProjectInput!
    $condition: ModelProjectConditionInput
  ) {
    deleteProject(input: $input, condition: $condition) {
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
export const createProjectKeyword = /* GraphQL */ `
  mutation CreateProjectKeyword(
    $input: CreateProjectKeywordInput!
    $condition: ModelProjectKeywordConditionInput
  ) {
    createProjectKeyword(input: $input, condition: $condition) {
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
export const updateProjectKeyword = /* GraphQL */ `
  mutation UpdateProjectKeyword(
    $input: UpdateProjectKeywordInput!
    $condition: ModelProjectKeywordConditionInput
  ) {
    updateProjectKeyword(input: $input, condition: $condition) {
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
export const deleteProjectKeyword = /* GraphQL */ `
  mutation DeleteProjectKeyword(
    $input: DeleteProjectKeywordInput!
    $condition: ModelProjectKeywordConditionInput
  ) {
    deleteProjectKeyword(input: $input, condition: $condition) {
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
export const createProjectNeed = /* GraphQL */ `
  mutation CreateProjectNeed(
    $input: CreateProjectNeedInput!
    $condition: ModelProjectNeedConditionInput
  ) {
    createProjectNeed(input: $input, condition: $condition) {
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
export const updateProjectNeed = /* GraphQL */ `
  mutation UpdateProjectNeed(
    $input: UpdateProjectNeedInput!
    $condition: ModelProjectNeedConditionInput
  ) {
    updateProjectNeed(input: $input, condition: $condition) {
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
export const deleteProjectNeed = /* GraphQL */ `
  mutation DeleteProjectNeed(
    $input: DeleteProjectNeedInput!
    $condition: ModelProjectNeedConditionInput
  ) {
    deleteProjectNeed(input: $input, condition: $condition) {
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
export const createProjectTag = /* GraphQL */ `
  mutation CreateProjectTag(
    $input: CreateProjectTagInput!
    $condition: ModelProjectTagConditionInput
  ) {
    createProjectTag(input: $input, condition: $condition) {
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
export const updateProjectTag = /* GraphQL */ `
  mutation UpdateProjectTag(
    $input: UpdateProjectTagInput!
    $condition: ModelProjectTagConditionInput
  ) {
    updateProjectTag(input: $input, condition: $condition) {
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
export const deleteProjectTag = /* GraphQL */ `
  mutation DeleteProjectTag(
    $input: DeleteProjectTagInput!
    $condition: ModelProjectTagConditionInput
  ) {
    deleteProjectTag(input: $input, condition: $condition) {
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
export const createProjectTask = /* GraphQL */ `
  mutation CreateProjectTask(
    $input: CreateProjectTaskInput!
    $condition: ModelProjectTaskConditionInput
  ) {
    createProjectTask(input: $input, condition: $condition) {
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
export const updateProjectTask = /* GraphQL */ `
  mutation UpdateProjectTask(
    $input: UpdateProjectTaskInput!
    $condition: ModelProjectTaskConditionInput
  ) {
    updateProjectTask(input: $input, condition: $condition) {
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
export const deleteProjectTask = /* GraphQL */ `
  mutation DeleteProjectTask(
    $input: DeleteProjectTaskInput!
    $condition: ModelProjectTaskConditionInput
  ) {
    deleteProjectTask(input: $input, condition: $condition) {
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
export const createStatement = /* GraphQL */ `
  mutation CreateStatement(
    $input: CreateStatementInput!
    $condition: ModelStatementConditionInput
  ) {
    createStatement(input: $input, condition: $condition) {
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
export const updateStatement = /* GraphQL */ `
  mutation UpdateStatement(
    $input: UpdateStatementInput!
    $condition: ModelStatementConditionInput
  ) {
    updateStatement(input: $input, condition: $condition) {
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
export const deleteStatement = /* GraphQL */ `
  mutation DeleteStatement(
    $input: DeleteStatementInput!
    $condition: ModelStatementConditionInput
  ) {
    deleteStatement(input: $input, condition: $condition) {
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
export const createTag = /* GraphQL */ `
  mutation CreateTag(
    $input: CreateTagInput!
    $condition: ModelTagConditionInput
  ) {
    createTag(input: $input, condition: $condition) {
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
export const updateTag = /* GraphQL */ `
  mutation UpdateTag(
    $input: UpdateTagInput!
    $condition: ModelTagConditionInput
  ) {
    updateTag(input: $input, condition: $condition) {
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
export const deleteTag = /* GraphQL */ `
  mutation DeleteTag(
    $input: DeleteTagInput!
    $condition: ModelTagConditionInput
  ) {
    deleteTag(input: $input, condition: $condition) {
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
export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
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
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
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
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
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
export const createUserKeyword = /* GraphQL */ `
  mutation CreateUserKeyword(
    $input: CreateUserKeywordInput!
    $condition: ModelUserKeywordConditionInput
  ) {
    createUserKeyword(input: $input, condition: $condition) {
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
export const updateUserKeyword = /* GraphQL */ `
  mutation UpdateUserKeyword(
    $input: UpdateUserKeywordInput!
    $condition: ModelUserKeywordConditionInput
  ) {
    updateUserKeyword(input: $input, condition: $condition) {
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
export const deleteUserKeyword = /* GraphQL */ `
  mutation DeleteUserKeyword(
    $input: DeleteUserKeywordInput!
    $condition: ModelUserKeywordConditionInput
  ) {
    deleteUserKeyword(input: $input, condition: $condition) {
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
export const createUserNeed = /* GraphQL */ `
  mutation CreateUserNeed(
    $input: CreateUserNeedInput!
    $condition: ModelUserNeedConditionInput
  ) {
    createUserNeed(input: $input, condition: $condition) {
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
export const updateUserNeed = /* GraphQL */ `
  mutation UpdateUserNeed(
    $input: UpdateUserNeedInput!
    $condition: ModelUserNeedConditionInput
  ) {
    updateUserNeed(input: $input, condition: $condition) {
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
export const deleteUserNeed = /* GraphQL */ `
  mutation DeleteUserNeed(
    $input: DeleteUserNeedInput!
    $condition: ModelUserNeedConditionInput
  ) {
    deleteUserNeed(input: $input, condition: $condition) {
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
export const createUserProject = /* GraphQL */ `
  mutation CreateUserProject(
    $input: CreateUserProjectInput!
    $condition: ModelUserProjectConditionInput
  ) {
    createUserProject(input: $input, condition: $condition) {
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
export const updateUserProject = /* GraphQL */ `
  mutation UpdateUserProject(
    $input: UpdateUserProjectInput!
    $condition: ModelUserProjectConditionInput
  ) {
    updateUserProject(input: $input, condition: $condition) {
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
export const deleteUserProject = /* GraphQL */ `
  mutation DeleteUserProject(
    $input: DeleteUserProjectInput!
    $condition: ModelUserProjectConditionInput
  ) {
    deleteUserProject(input: $input, condition: $condition) {
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
