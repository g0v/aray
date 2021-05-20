/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getContribution = /* GraphQL */ `
  query GetContribution($id: ID!) {
    getContribution(id: $id) {
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
export const listContributions = /* GraphQL */ `
  query ListContributions(
    $filter: ModelContributionFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listContributions(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getKeyword = /* GraphQL */ `
  query GetKeyword($id: ID!) {
    getKeyword(id: $id) {
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
export const listKeywords = /* GraphQL */ `
  query ListKeywords(
    $filter: ModelKeywordFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listKeywords(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getProject = /* GraphQL */ `
  query GetProject($id: ID!) {
    getProject(id: $id) {
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
export const listProjects = /* GraphQL */ `
  query ListProjects(
    $filter: ModelProjectFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listProjects(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
        createdAt
        createdBy
        updatedAt
        updatedBy
      }
      nextToken
    }
  }
`;
export const getProjectTag = /* GraphQL */ `
  query GetProjectTag($id: ID!) {
    getProjectTag(id: $id) {
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
        createdBy
        updatedAt
        updatedBy
      }
      createdAt
      updatedAt
    }
  }
`;
export const listProjectTags = /* GraphQL */ `
  query ListProjectTags(
    $filter: ModelProjectTagFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listProjectTags(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
          links {
            name
            url
          }
          contributors {
            nextToken
          }
          tags {
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
      nextToken
    }
  }
`;
export const getProjectTask = /* GraphQL */ `
  query GetProjectTask($id: ID!) {
    getProjectTask(id: $id) {
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
export const listProjectTasks = /* GraphQL */ `
  query ListProjectTasks(
    $filter: ModelProjectTaskFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listProjectTasks(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getTag = /* GraphQL */ `
  query GetTag($id: ID!) {
    getTag(id: $id) {
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
export const listTags = /* GraphQL */ `
  query ListTags(
    $filter: ModelTagFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTags(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
        createdBy
        updatedAt
        updatedBy
      }
      nextToken
    }
  }
`;
export const getUser = /* GraphQL */ `
  query GetUser($username: String!) {
    getUser(username: $username) {
      username
      status
      name
      email
      selfIntroduction
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
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $username: String
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listUsers(
      username: $username
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        username
        status
        name
        email
        selfIntroduction
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
      nextToken
    }
  }
`;
export const getUserKeyword = /* GraphQL */ `
  query GetUserKeyword($id: ID!) {
    getUserKeyword(id: $id) {
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
export const listUserKeywords = /* GraphQL */ `
  query ListUserKeywords(
    $filter: ModelUserKeywordFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUserKeywords(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        keywordId
        username
        keyword {
          id
          label
          users {
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
          projects {
            nextToken
          }
          keywords {
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
      nextToken
    }
  }
`;
export const getUserProject = /* GraphQL */ `
  query GetUserProject($id: ID!) {
    getUserProject(id: $id) {
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
export const listUserProjects = /* GraphQL */ `
  query ListUserProjects(
    $filter: ModelUserProjectFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUserProjects(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
          links {
            name
            url
          }
          contributors {
            nextToken
          }
          tags {
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
          projects {
            nextToken
          }
          keywords {
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
      nextToken
    }
  }
`;
export const getContributionsByUsernameByCreatedAt = /* GraphQL */ `
  query GetContributionsByUsernameByCreatedAt(
    $username: String
    $createdAt: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelContributionFilterInput
    $limit: Int
    $nextToken: String
  ) {
    getContributionsByUsernameByCreatedAt(
      username: $username
      createdAt: $createdAt
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
    }
  }
`;
export const getContributionsByProjectIdByCreatedAt = /* GraphQL */ `
  query GetContributionsByProjectIdByCreatedAt(
    $projectId: ID
    $createdAt: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelContributionFilterInput
    $limit: Int
    $nextToken: String
  ) {
    getContributionsByProjectIdByCreatedAt(
      projectId: $projectId
      createdAt: $createdAt
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
    }
  }
`;
export const getProjectTasksByProjectIdByStatus = /* GraphQL */ `
  query GetProjectTasksByProjectIdByStatus(
    $projectId: ID
    $status: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelProjectTaskFilterInput
    $limit: Int
    $nextToken: String
  ) {
    getProjectTasksByProjectIdByStatus(
      projectId: $projectId
      status: $status
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
    }
  }
`;
