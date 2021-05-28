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
export const getKeyword = /* GraphQL */ `
  query GetKeyword($id: ID!) {
    getKeyword(id: $id) {
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
      nextToken
    }
  }
`;
export const getNeed = /* GraphQL */ `
  query GetNeed($id: ID!) {
    getNeed(id: $id) {
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
            altName
            summary
            description
            slackChannel
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
export const listNeeds = /* GraphQL */ `
  query ListNeeds(
    $filter: ModelNeedFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listNeeds(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      altName
      summary
      description
      intros {
        languageCode
        name
        altName
        summary
        description
      }
      slackChannel
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
            altName
            summary
            description
            slackChannel
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
            altName
            summary
            description
            slackChannel
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
            altName
            summary
            description
            slackChannel
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
            altName
            summary
            description
            slackChannel
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
        altName
        summary
        description
        intros {
          languageCode
          name
          altName
          summary
          description
        }
        slackChannel
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
      nextToken
    }
  }
`;
export const getProjectKeyword = /* GraphQL */ `
  query GetProjectKeyword($id: ID!) {
    getProjectKeyword(id: $id) {
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
        altName
        summary
        description
        intros {
          languageCode
          name
          altName
          summary
          description
        }
        slackChannel
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
export const listProjectKeywords = /* GraphQL */ `
  query ListProjectKeywords(
    $filter: ModelProjectKeywordFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listProjectKeywords(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
          users {
            nextToken
          }
        }
        project {
          id
          status
          owner
          managers
          name
          altName
          summary
          description
          intros {
            languageCode
            name
            altName
            summary
            description
          }
          slackChannel
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
            nextToken
          }
          needs {
            nextToken
          }
          tags {
            nextToken
          }
          contributors {
            nextToken
          }
        }
      }
      nextToken
    }
  }
`;
export const getProjectNeed = /* GraphQL */ `
  query GetProjectNeed($id: ID!) {
    getProjectNeed(id: $id) {
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
        altName
        summary
        description
        intros {
          languageCode
          name
          altName
          summary
          description
        }
        slackChannel
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
export const listProjectNeeds = /* GraphQL */ `
  query ListProjectNeeds(
    $filter: ModelProjectNeedFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listProjectNeeds(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
          projects {
            nextToken
          }
        }
        project {
          id
          status
          owner
          managers
          name
          altName
          summary
          description
          intros {
            languageCode
            name
            altName
            summary
            description
          }
          slackChannel
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
            nextToken
          }
          needs {
            nextToken
          }
          tags {
            nextToken
          }
          contributors {
            nextToken
          }
        }
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
        altName
        summary
        description
        intros {
          languageCode
          name
          altName
          summary
          description
        }
        slackChannel
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
          altName
          summary
          description
          intros {
            languageCode
            name
            altName
            summary
            description
          }
          slackChannel
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
            nextToken
          }
          needs {
            nextToken
          }
          tags {
            nextToken
          }
          contributors {
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
            nextToken
          }
        }
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
export const getStatement = /* GraphQL */ `
  query GetStatement($id: ID!) {
    getStatement(id: $id) {
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
export const listStatements = /* GraphQL */ `
  query ListStatements(
    $filter: ModelStatementFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listStatements(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getStatementsByUsernameByDate = /* GraphQL */ `
  query GetStatementsByUsernameByDate(
    $username: String
    $date: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelStatementFilterInput
    $limit: Int
    $nextToken: String
  ) {
    getStatementsByUsernameByDate(
      username: $username
      date: $date
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
    }
  }
`;
export const getTag = /* GraphQL */ `
  query GetTag($id: ID!) {
    getTag(id: $id) {
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
            altName
            summary
            description
            slackChannel
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
            altName
            summary
            description
            slackChannel
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
            nextToken
          }
          needs {
            nextToken
          }
          projects {
            nextToken
          }
        }
      }
      nextToken
    }
  }
`;
export const getUserNeed = /* GraphQL */ `
  query GetUserNeed($id: ID!) {
    getUserNeed(id: $id) {
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
export const listUserNeeds = /* GraphQL */ `
  query ListUserNeeds(
    $filter: ModelUserNeedFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUserNeeds(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
          projects {
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
            nextToken
          }
          needs {
            nextToken
          }
          projects {
            nextToken
          }
        }
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
        altName
        summary
        description
        intros {
          languageCode
          name
          altName
          summary
          description
        }
        slackChannel
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
          altName
          summary
          description
          intros {
            languageCode
            name
            altName
            summary
            description
          }
          slackChannel
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
            nextToken
          }
          needs {
            nextToken
          }
          tags {
            nextToken
          }
          contributors {
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
            nextToken
          }
          needs {
            nextToken
          }
          projects {
            nextToken
          }
        }
      }
      nextToken
    }
  }
`;
