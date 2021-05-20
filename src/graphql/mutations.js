/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createOrUpdateProject = /* GraphQL */ `
  mutation CreateOrUpdateProject($input: CreateOrUpdateProjectRequest!) {
    createOrUpdateProject(input: $input) {
      id
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
export const updateKeyword = /* GraphQL */ `
  mutation UpdateKeyword(
    $input: UpdateKeywordInput!
    $condition: ModelKeywordConditionInput
  ) {
    updateKeyword(input: $input, condition: $condition) {
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
export const deleteKeyword = /* GraphQL */ `
  mutation DeleteKeyword(
    $input: DeleteKeywordInput!
    $condition: ModelKeywordConditionInput
  ) {
    deleteKeyword(input: $input, condition: $condition) {
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
export const createProjectTag = /* GraphQL */ `
  mutation CreateProjectTag(
    $input: CreateProjectTagInput!
    $condition: ModelProjectTagConditionInput
  ) {
    createProjectTag(input: $input, condition: $condition) {
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
export const updateProjectTag = /* GraphQL */ `
  mutation UpdateProjectTag(
    $input: UpdateProjectTagInput!
    $condition: ModelProjectTagConditionInput
  ) {
    updateProjectTag(input: $input, condition: $condition) {
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
export const deleteProjectTag = /* GraphQL */ `
  mutation DeleteProjectTag(
    $input: DeleteProjectTagInput!
    $condition: ModelProjectTagConditionInput
  ) {
    deleteProjectTag(input: $input, condition: $condition) {
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
export const createTag = /* GraphQL */ `
  mutation CreateTag(
    $input: CreateTagInput!
    $condition: ModelTagConditionInput
  ) {
    createTag(input: $input, condition: $condition) {
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
export const updateTag = /* GraphQL */ `
  mutation UpdateTag(
    $input: UpdateTagInput!
    $condition: ModelTagConditionInput
  ) {
    updateTag(input: $input, condition: $condition) {
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
export const deleteTag = /* GraphQL */ `
  mutation DeleteTag(
    $input: DeleteTagInput!
    $condition: ModelTagConditionInput
  ) {
    deleteTag(input: $input, condition: $condition) {
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
export const createUserKeyword = /* GraphQL */ `
  mutation CreateUserKeyword(
    $input: CreateUserKeywordInput!
    $condition: ModelUserKeywordConditionInput
  ) {
    createUserKeyword(input: $input, condition: $condition) {
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
export const updateUserKeyword = /* GraphQL */ `
  mutation UpdateUserKeyword(
    $input: UpdateUserKeywordInput!
    $condition: ModelUserKeywordConditionInput
  ) {
    updateUserKeyword(input: $input, condition: $condition) {
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
export const deleteUserKeyword = /* GraphQL */ `
  mutation DeleteUserKeyword(
    $input: DeleteUserKeywordInput!
    $condition: ModelUserKeywordConditionInput
  ) {
    deleteUserKeyword(input: $input, condition: $condition) {
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
export const createUserProject = /* GraphQL */ `
  mutation CreateUserProject(
    $input: CreateUserProjectInput!
    $condition: ModelUserProjectConditionInput
  ) {
    createUserProject(input: $input, condition: $condition) {
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
export const updateUserProject = /* GraphQL */ `
  mutation UpdateUserProject(
    $input: UpdateUserProjectInput!
    $condition: ModelUserProjectConditionInput
  ) {
    updateUserProject(input: $input, condition: $condition) {
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
export const deleteUserProject = /* GraphQL */ `
  mutation DeleteUserProject(
    $input: DeleteUserProjectInput!
    $condition: ModelUserProjectConditionInput
  ) {
    deleteUserProject(input: $input, condition: $condition) {
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
