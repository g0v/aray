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
export const changeProjectOwner = /* GraphQL */ `
  mutation ChangeProjectOwner($input: ChangeProjectOwnerRequest!) {
    changeProjectOwner(input: $input) {
      id
    }
  }
`;
export const createOrUpdateEventAttendance = /* GraphQL */ `
  mutation CreateOrUpdateEventAttendance(
    $input: CreateOrUpdateEventAttendanceRequest!
  ) {
    createOrUpdateEventAttendance(input: $input) {
      id
    }
  }
`;
export const createCategory = /* GraphQL */ `
  mutation CreateCategory(
    $input: CreateCategoryInput!
    $condition: ModelCategoryConditionInput
  ) {
    createCategory(input: $input, condition: $condition) {
      id
      label
      description
      createdAt
      createdBy
      updatedAt
      updatedBy
    }
  }
`;
export const updateCategory = /* GraphQL */ `
  mutation UpdateCategory(
    $input: UpdateCategoryInput!
    $condition: ModelCategoryConditionInput
  ) {
    updateCategory(input: $input, condition: $condition) {
      id
      label
      description
      createdAt
      createdBy
      updatedAt
      updatedBy
    }
  }
`;
export const deleteCategory = /* GraphQL */ `
  mutation DeleteCategory(
    $input: DeleteCategoryInput!
    $condition: ModelCategoryConditionInput
  ) {
    deleteCategory(input: $input, condition: $condition) {
      id
      label
      description
      createdAt
      createdBy
      updatedAt
      updatedBy
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
export const createEvent = /* GraphQL */ `
  mutation CreateEvent(
    $input: CreateEventInput!
    $condition: ModelEventConditionInput
  ) {
    createEvent(input: $input, condition: $condition) {
      id
      projectId
      name
      type
      description
      startDate
      endDate
      duration
      hosts
      annouceToContributors
      guestLimit
      attendanceCount
      rsvpQuestion
      rsvpLimit
      rsvpOpenTime
      rsvpCloseTime
      location
      link
      createdAt
      createdBy
      updatedAt
      updatedBy
    }
  }
`;
export const updateEvent = /* GraphQL */ `
  mutation UpdateEvent(
    $input: UpdateEventInput!
    $condition: ModelEventConditionInput
  ) {
    updateEvent(input: $input, condition: $condition) {
      id
      projectId
      name
      type
      description
      startDate
      endDate
      duration
      hosts
      annouceToContributors
      guestLimit
      attendanceCount
      rsvpQuestion
      rsvpLimit
      rsvpOpenTime
      rsvpCloseTime
      location
      link
      createdAt
      createdBy
      updatedAt
      updatedBy
    }
  }
`;
export const deleteEvent = /* GraphQL */ `
  mutation DeleteEvent(
    $input: DeleteEventInput!
    $condition: ModelEventConditionInput
  ) {
    deleteEvent(input: $input, condition: $condition) {
      id
      projectId
      name
      type
      description
      startDate
      endDate
      duration
      hosts
      annouceToContributors
      guestLimit
      attendanceCount
      rsvpQuestion
      rsvpLimit
      rsvpOpenTime
      rsvpCloseTime
      location
      link
      createdAt
      createdBy
      updatedAt
      updatedBy
    }
  }
`;
export const createEventAttendance = /* GraphQL */ `
  mutation CreateEventAttendance(
    $input: CreateEventAttendanceInput!
    $condition: ModelEventAttendanceConditionInput
  ) {
    createEventAttendance(input: $input, condition: $condition) {
      id
      eventId
      username
      status
      note
      createdAt
      createdBy
      updatedAt
      updatedBy
    }
  }
`;
export const updateEventAttendance = /* GraphQL */ `
  mutation UpdateEventAttendance(
    $input: UpdateEventAttendanceInput!
    $condition: ModelEventAttendanceConditionInput
  ) {
    updateEventAttendance(input: $input, condition: $condition) {
      id
      eventId
      username
      status
      note
      createdAt
      createdBy
      updatedAt
      updatedBy
    }
  }
`;
export const deleteEventAttendance = /* GraphQL */ `
  mutation DeleteEventAttendance(
    $input: DeleteEventAttendanceInput!
    $condition: ModelEventAttendanceConditionInput
  ) {
    deleteEventAttendance(input: $input, condition: $condition) {
      id
      eventId
      username
      status
      note
      createdAt
      createdBy
      updatedAt
      updatedBy
    }
  }
`;
export const createEventProject = /* GraphQL */ `
  mutation CreateEventProject(
    $input: CreateEventProjectInput!
    $condition: ModelEventProjectConditionInput
  ) {
    createEventProject(input: $input, condition: $condition) {
      id
      eventId
      projectId
      status
      title
      description
      createdAt
      createdBy
      updatedAt
      updatedBy
    }
  }
`;
export const updateEventProject = /* GraphQL */ `
  mutation UpdateEventProject(
    $input: UpdateEventProjectInput!
    $condition: ModelEventProjectConditionInput
  ) {
    updateEventProject(input: $input, condition: $condition) {
      id
      eventId
      projectId
      status
      title
      description
      createdAt
      createdBy
      updatedAt
      updatedBy
    }
  }
`;
export const deleteEventProject = /* GraphQL */ `
  mutation DeleteEventProject(
    $input: DeleteEventProjectInput!
    $condition: ModelEventProjectConditionInput
  ) {
    deleteEventProject(input: $input, condition: $condition) {
      id
      eventId
      projectId
      status
      title
      description
      createdAt
      createdBy
      updatedAt
      updatedBy
    }
  }
`;
export const createGovernmentAgency = /* GraphQL */ `
  mutation CreateGovernmentAgency(
    $input: CreateGovernmentAgencyInput!
    $condition: ModelGovernmentAgencyConditionInput
  ) {
    createGovernmentAgency(input: $input, condition: $condition) {
      id
      label
      description
      link
      createdAt
      createdBy
      updatedAt
      updatedBy
    }
  }
`;
export const updateGovernmentAgency = /* GraphQL */ `
  mutation UpdateGovernmentAgency(
    $input: UpdateGovernmentAgencyInput!
    $condition: ModelGovernmentAgencyConditionInput
  ) {
    updateGovernmentAgency(input: $input, condition: $condition) {
      id
      label
      description
      link
      createdAt
      createdBy
      updatedAt
      updatedBy
    }
  }
`;
export const deleteGovernmentAgency = /* GraphQL */ `
  mutation DeleteGovernmentAgency(
    $input: DeleteGovernmentAgencyInput!
    $condition: ModelGovernmentAgencyConditionInput
  ) {
    deleteGovernmentAgency(input: $input, condition: $condition) {
      id
      label
      description
      link
      createdAt
      createdBy
      updatedAt
      updatedBy
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
      slackChannelUrl
      links {
        name
        description
        url
      }
      totalCompletedHours
      totalCompletedTasks
      totalContributors
      avatarS3Key
      createdAt
      createdBy
      updatedAt
      updatedBy
      categorys {
        items {
          id
          projectId
          categoryId
          createdAt
          createdBy
          updatedAt
          updatedBy
          category {
            id
            label
            description
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
            slackChannelUrl
            totalCompletedHours
            totalCompletedTasks
            totalContributors
            avatarS3Key
            createdAt
            createdBy
            updatedAt
            updatedBy
          }
        }
        nextToken
      }
      governmentAgencies {
        items {
          id
          projectId
          governmentAgencyId
          createdAt
          createdBy
          updatedAt
          updatedBy
          governmentAgency {
            id
            label
            description
            link
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
            slackChannelUrl
            totalCompletedHours
            totalCompletedTasks
            totalContributors
            avatarS3Key
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
            slackChannelUrl
            totalCompletedHours
            totalCompletedTasks
            totalContributors
            avatarS3Key
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
            slackChannelUrl
            totalCompletedHours
            totalCompletedTasks
            totalContributors
            avatarS3Key
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
            slackChannelUrl
            totalCompletedHours
            totalCompletedTasks
            totalContributors
            avatarS3Key
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
            slackIdUrl
            urlWebsite
            urlGithub
            urlLinkedIn
            urlFacebook
            urlTwitter
            urlInstagram
            totalCompletedHours
            totalCompletedTasks
            avatarS3Key
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
      slackChannelUrl
      links {
        name
        description
        url
      }
      totalCompletedHours
      totalCompletedTasks
      totalContributors
      avatarS3Key
      createdAt
      createdBy
      updatedAt
      updatedBy
      categorys {
        items {
          id
          projectId
          categoryId
          createdAt
          createdBy
          updatedAt
          updatedBy
          category {
            id
            label
            description
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
            slackChannelUrl
            totalCompletedHours
            totalCompletedTasks
            totalContributors
            avatarS3Key
            createdAt
            createdBy
            updatedAt
            updatedBy
          }
        }
        nextToken
      }
      governmentAgencies {
        items {
          id
          projectId
          governmentAgencyId
          createdAt
          createdBy
          updatedAt
          updatedBy
          governmentAgency {
            id
            label
            description
            link
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
            slackChannelUrl
            totalCompletedHours
            totalCompletedTasks
            totalContributors
            avatarS3Key
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
            slackChannelUrl
            totalCompletedHours
            totalCompletedTasks
            totalContributors
            avatarS3Key
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
            slackChannelUrl
            totalCompletedHours
            totalCompletedTasks
            totalContributors
            avatarS3Key
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
            slackChannelUrl
            totalCompletedHours
            totalCompletedTasks
            totalContributors
            avatarS3Key
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
            slackIdUrl
            urlWebsite
            urlGithub
            urlLinkedIn
            urlFacebook
            urlTwitter
            urlInstagram
            totalCompletedHours
            totalCompletedTasks
            avatarS3Key
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
      slackChannelUrl
      links {
        name
        description
        url
      }
      totalCompletedHours
      totalCompletedTasks
      totalContributors
      avatarS3Key
      createdAt
      createdBy
      updatedAt
      updatedBy
      categorys {
        items {
          id
          projectId
          categoryId
          createdAt
          createdBy
          updatedAt
          updatedBy
          category {
            id
            label
            description
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
            slackChannelUrl
            totalCompletedHours
            totalCompletedTasks
            totalContributors
            avatarS3Key
            createdAt
            createdBy
            updatedAt
            updatedBy
          }
        }
        nextToken
      }
      governmentAgencies {
        items {
          id
          projectId
          governmentAgencyId
          createdAt
          createdBy
          updatedAt
          updatedBy
          governmentAgency {
            id
            label
            description
            link
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
            slackChannelUrl
            totalCompletedHours
            totalCompletedTasks
            totalContributors
            avatarS3Key
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
            slackChannelUrl
            totalCompletedHours
            totalCompletedTasks
            totalContributors
            avatarS3Key
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
            slackChannelUrl
            totalCompletedHours
            totalCompletedTasks
            totalContributors
            avatarS3Key
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
            slackChannelUrl
            totalCompletedHours
            totalCompletedTasks
            totalContributors
            avatarS3Key
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
            slackIdUrl
            urlWebsite
            urlGithub
            urlLinkedIn
            urlFacebook
            urlTwitter
            urlInstagram
            totalCompletedHours
            totalCompletedTasks
            avatarS3Key
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
export const createProjectCategory = /* GraphQL */ `
  mutation CreateProjectCategory(
    $input: CreateProjectCategoryInput!
    $condition: ModelProjectCategoryConditionInput
  ) {
    createProjectCategory(input: $input, condition: $condition) {
      id
      projectId
      categoryId
      createdAt
      createdBy
      updatedAt
      updatedBy
      category {
        id
        label
        description
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
        intros {
          languageCode
          name
          altName
          summary
          description
        }
        slackChannel
        slackChannelUrl
        links {
          name
          description
          url
        }
        totalCompletedHours
        totalCompletedTasks
        totalContributors
        avatarS3Key
        createdAt
        createdBy
        updatedAt
        updatedBy
        categorys {
          items {
            id
            projectId
            categoryId
            createdAt
            createdBy
            updatedAt
            updatedBy
          }
          nextToken
        }
        governmentAgencies {
          items {
            id
            projectId
            governmentAgencyId
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
export const updateProjectCategory = /* GraphQL */ `
  mutation UpdateProjectCategory(
    $input: UpdateProjectCategoryInput!
    $condition: ModelProjectCategoryConditionInput
  ) {
    updateProjectCategory(input: $input, condition: $condition) {
      id
      projectId
      categoryId
      createdAt
      createdBy
      updatedAt
      updatedBy
      category {
        id
        label
        description
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
        intros {
          languageCode
          name
          altName
          summary
          description
        }
        slackChannel
        slackChannelUrl
        links {
          name
          description
          url
        }
        totalCompletedHours
        totalCompletedTasks
        totalContributors
        avatarS3Key
        createdAt
        createdBy
        updatedAt
        updatedBy
        categorys {
          items {
            id
            projectId
            categoryId
            createdAt
            createdBy
            updatedAt
            updatedBy
          }
          nextToken
        }
        governmentAgencies {
          items {
            id
            projectId
            governmentAgencyId
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
export const deleteProjectCategory = /* GraphQL */ `
  mutation DeleteProjectCategory(
    $input: DeleteProjectCategoryInput!
    $condition: ModelProjectCategoryConditionInput
  ) {
    deleteProjectCategory(input: $input, condition: $condition) {
      id
      projectId
      categoryId
      createdAt
      createdBy
      updatedAt
      updatedBy
      category {
        id
        label
        description
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
        intros {
          languageCode
          name
          altName
          summary
          description
        }
        slackChannel
        slackChannelUrl
        links {
          name
          description
          url
        }
        totalCompletedHours
        totalCompletedTasks
        totalContributors
        avatarS3Key
        createdAt
        createdBy
        updatedAt
        updatedBy
        categorys {
          items {
            id
            projectId
            categoryId
            createdAt
            createdBy
            updatedAt
            updatedBy
          }
          nextToken
        }
        governmentAgencies {
          items {
            id
            projectId
            governmentAgencyId
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
export const createProjectGovernmentAgency = /* GraphQL */ `
  mutation CreateProjectGovernmentAgency(
    $input: CreateProjectGovernmentAgencyInput!
    $condition: ModelProjectGovernmentAgencyConditionInput
  ) {
    createProjectGovernmentAgency(input: $input, condition: $condition) {
      id
      projectId
      governmentAgencyId
      createdAt
      createdBy
      updatedAt
      updatedBy
      governmentAgency {
        id
        label
        description
        link
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
        intros {
          languageCode
          name
          altName
          summary
          description
        }
        slackChannel
        slackChannelUrl
        links {
          name
          description
          url
        }
        totalCompletedHours
        totalCompletedTasks
        totalContributors
        avatarS3Key
        createdAt
        createdBy
        updatedAt
        updatedBy
        categorys {
          items {
            id
            projectId
            categoryId
            createdAt
            createdBy
            updatedAt
            updatedBy
          }
          nextToken
        }
        governmentAgencies {
          items {
            id
            projectId
            governmentAgencyId
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
export const updateProjectGovernmentAgency = /* GraphQL */ `
  mutation UpdateProjectGovernmentAgency(
    $input: UpdateProjectGovernmentAgencyInput!
    $condition: ModelProjectGovernmentAgencyConditionInput
  ) {
    updateProjectGovernmentAgency(input: $input, condition: $condition) {
      id
      projectId
      governmentAgencyId
      createdAt
      createdBy
      updatedAt
      updatedBy
      governmentAgency {
        id
        label
        description
        link
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
        intros {
          languageCode
          name
          altName
          summary
          description
        }
        slackChannel
        slackChannelUrl
        links {
          name
          description
          url
        }
        totalCompletedHours
        totalCompletedTasks
        totalContributors
        avatarS3Key
        createdAt
        createdBy
        updatedAt
        updatedBy
        categorys {
          items {
            id
            projectId
            categoryId
            createdAt
            createdBy
            updatedAt
            updatedBy
          }
          nextToken
        }
        governmentAgencies {
          items {
            id
            projectId
            governmentAgencyId
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
export const deleteProjectGovernmentAgency = /* GraphQL */ `
  mutation DeleteProjectGovernmentAgency(
    $input: DeleteProjectGovernmentAgencyInput!
    $condition: ModelProjectGovernmentAgencyConditionInput
  ) {
    deleteProjectGovernmentAgency(input: $input, condition: $condition) {
      id
      projectId
      governmentAgencyId
      createdAt
      createdBy
      updatedAt
      updatedBy
      governmentAgency {
        id
        label
        description
        link
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
        intros {
          languageCode
          name
          altName
          summary
          description
        }
        slackChannel
        slackChannelUrl
        links {
          name
          description
          url
        }
        totalCompletedHours
        totalCompletedTasks
        totalContributors
        avatarS3Key
        createdAt
        createdBy
        updatedAt
        updatedBy
        categorys {
          items {
            id
            projectId
            categoryId
            createdAt
            createdBy
            updatedAt
            updatedBy
          }
          nextToken
        }
        governmentAgencies {
          items {
            id
            projectId
            governmentAgencyId
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
        slackChannelUrl
        links {
          name
          description
          url
        }
        totalCompletedHours
        totalCompletedTasks
        totalContributors
        avatarS3Key
        createdAt
        createdBy
        updatedAt
        updatedBy
        categorys {
          items {
            id
            projectId
            categoryId
            createdAt
            createdBy
            updatedAt
            updatedBy
          }
          nextToken
        }
        governmentAgencies {
          items {
            id
            projectId
            governmentAgencyId
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
        slackChannelUrl
        links {
          name
          description
          url
        }
        totalCompletedHours
        totalCompletedTasks
        totalContributors
        avatarS3Key
        createdAt
        createdBy
        updatedAt
        updatedBy
        categorys {
          items {
            id
            projectId
            categoryId
            createdAt
            createdBy
            updatedAt
            updatedBy
          }
          nextToken
        }
        governmentAgencies {
          items {
            id
            projectId
            governmentAgencyId
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
        slackChannelUrl
        links {
          name
          description
          url
        }
        totalCompletedHours
        totalCompletedTasks
        totalContributors
        avatarS3Key
        createdAt
        createdBy
        updatedAt
        updatedBy
        categorys {
          items {
            id
            projectId
            categoryId
            createdAt
            createdBy
            updatedAt
            updatedBy
          }
          nextToken
        }
        governmentAgencies {
          items {
            id
            projectId
            governmentAgencyId
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
        slackChannelUrl
        links {
          name
          description
          url
        }
        totalCompletedHours
        totalCompletedTasks
        totalContributors
        avatarS3Key
        createdAt
        createdBy
        updatedAt
        updatedBy
        categorys {
          items {
            id
            projectId
            categoryId
            createdAt
            createdBy
            updatedAt
            updatedBy
          }
          nextToken
        }
        governmentAgencies {
          items {
            id
            projectId
            governmentAgencyId
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
        slackChannelUrl
        links {
          name
          description
          url
        }
        totalCompletedHours
        totalCompletedTasks
        totalContributors
        avatarS3Key
        createdAt
        createdBy
        updatedAt
        updatedBy
        categorys {
          items {
            id
            projectId
            categoryId
            createdAt
            createdBy
            updatedAt
            updatedBy
          }
          nextToken
        }
        governmentAgencies {
          items {
            id
            projectId
            governmentAgencyId
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
        slackChannelUrl
        links {
          name
          description
          url
        }
        totalCompletedHours
        totalCompletedTasks
        totalContributors
        avatarS3Key
        createdAt
        createdBy
        updatedAt
        updatedBy
        categorys {
          items {
            id
            projectId
            categoryId
            createdAt
            createdBy
            updatedAt
            updatedBy
          }
          nextToken
        }
        governmentAgencies {
          items {
            id
            projectId
            governmentAgencyId
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
      slackIdUrl
      urlWebsite
      urlGithub
      urlLinkedIn
      urlFacebook
      urlTwitter
      urlInstagram
      totalCompletedHours
      totalCompletedTasks
      avatarS3Key
      createdAt
      createdBy
      updatedAt
      updatedBy
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
            slackIdUrl
            urlWebsite
            urlGithub
            urlLinkedIn
            urlFacebook
            urlTwitter
            urlInstagram
            totalCompletedHours
            totalCompletedTasks
            avatarS3Key
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
            slackChannelUrl
            totalCompletedHours
            totalCompletedTasks
            totalContributors
            avatarS3Key
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
            slackIdUrl
            urlWebsite
            urlGithub
            urlLinkedIn
            urlFacebook
            urlTwitter
            urlInstagram
            totalCompletedHours
            totalCompletedTasks
            avatarS3Key
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
          tagId
          username
          createdAt
          createdBy
          updatedAt
          updatedBy
          tag {
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
            slackIdUrl
            urlWebsite
            urlGithub
            urlLinkedIn
            urlFacebook
            urlTwitter
            urlInstagram
            totalCompletedHours
            totalCompletedTasks
            avatarS3Key
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
      slackIdUrl
      urlWebsite
      urlGithub
      urlLinkedIn
      urlFacebook
      urlTwitter
      urlInstagram
      totalCompletedHours
      totalCompletedTasks
      avatarS3Key
      createdAt
      createdBy
      updatedAt
      updatedBy
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
            slackIdUrl
            urlWebsite
            urlGithub
            urlLinkedIn
            urlFacebook
            urlTwitter
            urlInstagram
            totalCompletedHours
            totalCompletedTasks
            avatarS3Key
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
            slackChannelUrl
            totalCompletedHours
            totalCompletedTasks
            totalContributors
            avatarS3Key
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
            slackIdUrl
            urlWebsite
            urlGithub
            urlLinkedIn
            urlFacebook
            urlTwitter
            urlInstagram
            totalCompletedHours
            totalCompletedTasks
            avatarS3Key
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
          tagId
          username
          createdAt
          createdBy
          updatedAt
          updatedBy
          tag {
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
            slackIdUrl
            urlWebsite
            urlGithub
            urlLinkedIn
            urlFacebook
            urlTwitter
            urlInstagram
            totalCompletedHours
            totalCompletedTasks
            avatarS3Key
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
      slackIdUrl
      urlWebsite
      urlGithub
      urlLinkedIn
      urlFacebook
      urlTwitter
      urlInstagram
      totalCompletedHours
      totalCompletedTasks
      avatarS3Key
      createdAt
      createdBy
      updatedAt
      updatedBy
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
            slackIdUrl
            urlWebsite
            urlGithub
            urlLinkedIn
            urlFacebook
            urlTwitter
            urlInstagram
            totalCompletedHours
            totalCompletedTasks
            avatarS3Key
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
            slackChannelUrl
            totalCompletedHours
            totalCompletedTasks
            totalContributors
            avatarS3Key
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
            slackIdUrl
            urlWebsite
            urlGithub
            urlLinkedIn
            urlFacebook
            urlTwitter
            urlInstagram
            totalCompletedHours
            totalCompletedTasks
            avatarS3Key
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
          tagId
          username
          createdAt
          createdBy
          updatedAt
          updatedBy
          tag {
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
            slackIdUrl
            urlWebsite
            urlGithub
            urlLinkedIn
            urlFacebook
            urlTwitter
            urlInstagram
            totalCompletedHours
            totalCompletedTasks
            avatarS3Key
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
        slackIdUrl
        urlWebsite
        urlGithub
        urlLinkedIn
        urlFacebook
        urlTwitter
        urlInstagram
        totalCompletedHours
        totalCompletedTasks
        avatarS3Key
        createdAt
        createdBy
        updatedAt
        updatedBy
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
        tags {
          items {
            id
            tagId
            username
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
        slackIdUrl
        urlWebsite
        urlGithub
        urlLinkedIn
        urlFacebook
        urlTwitter
        urlInstagram
        totalCompletedHours
        totalCompletedTasks
        avatarS3Key
        createdAt
        createdBy
        updatedAt
        updatedBy
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
        tags {
          items {
            id
            tagId
            username
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
        slackIdUrl
        urlWebsite
        urlGithub
        urlLinkedIn
        urlFacebook
        urlTwitter
        urlInstagram
        totalCompletedHours
        totalCompletedTasks
        avatarS3Key
        createdAt
        createdBy
        updatedAt
        updatedBy
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
        tags {
          items {
            id
            tagId
            username
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
        slackChannelUrl
        links {
          name
          description
          url
        }
        totalCompletedHours
        totalCompletedTasks
        totalContributors
        avatarS3Key
        createdAt
        createdBy
        updatedAt
        updatedBy
        categorys {
          items {
            id
            projectId
            categoryId
            createdAt
            createdBy
            updatedAt
            updatedBy
          }
          nextToken
        }
        governmentAgencies {
          items {
            id
            projectId
            governmentAgencyId
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
        slackIdUrl
        urlWebsite
        urlGithub
        urlLinkedIn
        urlFacebook
        urlTwitter
        urlInstagram
        totalCompletedHours
        totalCompletedTasks
        avatarS3Key
        createdAt
        createdBy
        updatedAt
        updatedBy
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
        tags {
          items {
            id
            tagId
            username
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
        slackChannelUrl
        links {
          name
          description
          url
        }
        totalCompletedHours
        totalCompletedTasks
        totalContributors
        avatarS3Key
        createdAt
        createdBy
        updatedAt
        updatedBy
        categorys {
          items {
            id
            projectId
            categoryId
            createdAt
            createdBy
            updatedAt
            updatedBy
          }
          nextToken
        }
        governmentAgencies {
          items {
            id
            projectId
            governmentAgencyId
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
        slackIdUrl
        urlWebsite
        urlGithub
        urlLinkedIn
        urlFacebook
        urlTwitter
        urlInstagram
        totalCompletedHours
        totalCompletedTasks
        avatarS3Key
        createdAt
        createdBy
        updatedAt
        updatedBy
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
        tags {
          items {
            id
            tagId
            username
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
        slackChannelUrl
        links {
          name
          description
          url
        }
        totalCompletedHours
        totalCompletedTasks
        totalContributors
        avatarS3Key
        createdAt
        createdBy
        updatedAt
        updatedBy
        categorys {
          items {
            id
            projectId
            categoryId
            createdAt
            createdBy
            updatedAt
            updatedBy
          }
          nextToken
        }
        governmentAgencies {
          items {
            id
            projectId
            governmentAgencyId
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
        slackIdUrl
        urlWebsite
        urlGithub
        urlLinkedIn
        urlFacebook
        urlTwitter
        urlInstagram
        totalCompletedHours
        totalCompletedTasks
        avatarS3Key
        createdAt
        createdBy
        updatedAt
        updatedBy
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
        tags {
          items {
            id
            tagId
            username
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
export const createUserTag = /* GraphQL */ `
  mutation CreateUserTag(
    $input: CreateUserTagInput!
    $condition: ModelUserTagConditionInput
  ) {
    createUserTag(input: $input, condition: $condition) {
      id
      tagId
      username
      createdAt
      createdBy
      updatedAt
      updatedBy
      tag {
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
        slackIdUrl
        urlWebsite
        urlGithub
        urlLinkedIn
        urlFacebook
        urlTwitter
        urlInstagram
        totalCompletedHours
        totalCompletedTasks
        avatarS3Key
        createdAt
        createdBy
        updatedAt
        updatedBy
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
        tags {
          items {
            id
            tagId
            username
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
export const updateUserTag = /* GraphQL */ `
  mutation UpdateUserTag(
    $input: UpdateUserTagInput!
    $condition: ModelUserTagConditionInput
  ) {
    updateUserTag(input: $input, condition: $condition) {
      id
      tagId
      username
      createdAt
      createdBy
      updatedAt
      updatedBy
      tag {
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
        slackIdUrl
        urlWebsite
        urlGithub
        urlLinkedIn
        urlFacebook
        urlTwitter
        urlInstagram
        totalCompletedHours
        totalCompletedTasks
        avatarS3Key
        createdAt
        createdBy
        updatedAt
        updatedBy
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
        tags {
          items {
            id
            tagId
            username
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
export const deleteUserTag = /* GraphQL */ `
  mutation DeleteUserTag(
    $input: DeleteUserTagInput!
    $condition: ModelUserTagConditionInput
  ) {
    deleteUserTag(input: $input, condition: $condition) {
      id
      tagId
      username
      createdAt
      createdBy
      updatedAt
      updatedBy
      tag {
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
        slackIdUrl
        urlWebsite
        urlGithub
        urlLinkedIn
        urlFacebook
        urlTwitter
        urlInstagram
        totalCompletedHours
        totalCompletedTasks
        avatarS3Key
        createdAt
        createdBy
        updatedAt
        updatedBy
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
        tags {
          items {
            id
            tagId
            username
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
