/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getCategory = /* GraphQL */ `
  query GetCategory($id: ID!) {
    getCategory(id: $id) {
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
export const listCategorys = /* GraphQL */ `
  query ListCategorys(
    $filter: ModelCategoryFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCategorys(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        label
        description
        createdAt
        createdBy
        updatedAt
        updatedBy
      }
      nextToken
    }
  }
`;
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
export const getEvent = /* GraphQL */ `
  query GetEvent($id: ID!) {
    getEvent(id: $id) {
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
export const listEvents = /* GraphQL */ `
  query ListEvents(
    $filter: ModelEventFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listEvents(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getEventsByProjectIdByStartDate = /* GraphQL */ `
  query GetEventsByProjectIdByStartDate(
    $projectId: ID
    $startDate: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelEventFilterInput
    $limit: Int
    $nextToken: String
  ) {
    getEventsByProjectIdByStartDate(
      projectId: $projectId
      startDate: $startDate
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
    }
  }
`;
export const getEventAttendance = /* GraphQL */ `
  query GetEventAttendance($id: ID!) {
    getEventAttendance(id: $id) {
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
export const listEventAttendances = /* GraphQL */ `
  query ListEventAttendances(
    $filter: ModelEventAttendanceFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listEventAttendances(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
    }
  }
`;
export const getEventAttendancesByEventIdByStatus = /* GraphQL */ `
  query GetEventAttendancesByEventIdByStatus(
    $eventId: ID
    $status: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelEventAttendanceFilterInput
    $limit: Int
    $nextToken: String
  ) {
    getEventAttendancesByEventIdByStatus(
      eventId: $eventId
      status: $status
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
    }
  }
`;
export const getEventAttendancesByUsernameByCreatedAt = /* GraphQL */ `
  query GetEventAttendancesByUsernameByCreatedAt(
    $username: String
    $createdAt: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelEventAttendanceFilterInput
    $limit: Int
    $nextToken: String
  ) {
    getEventAttendancesByUsernameByCreatedAt(
      username: $username
      createdAt: $createdAt
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
    }
  }
`;
export const getEventProject = /* GraphQL */ `
  query GetEventProject($id: ID!) {
    getEventProject(id: $id) {
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
export const listEventProjects = /* GraphQL */ `
  query ListEventProjects(
    $filter: ModelEventProjectFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listEventProjects(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getEventProjectsByEventIdByStatus = /* GraphQL */ `
  query GetEventProjectsByEventIdByStatus(
    $eventId: ID
    $status: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelEventProjectFilterInput
    $limit: Int
    $nextToken: String
  ) {
    getEventProjectsByEventIdByStatus(
      eventId: $eventId
      status: $status
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
    }
  }
`;
export const getGovernmentAgency = /* GraphQL */ `
  query GetGovernmentAgency($id: ID!) {
    getGovernmentAgency(id: $id) {
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
export const listGovernmentAgencys = /* GraphQL */ `
  query ListGovernmentAgencys(
    $filter: ModelGovernmentAgencyFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listGovernmentAgencys(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        label
        description
        link
        createdAt
        createdBy
        updatedAt
        updatedBy
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
      slackChannelUrl
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
        slackChannelUrl
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
      nextToken
    }
  }
`;
export const getProjectCategory = /* GraphQL */ `
  query GetProjectCategory($id: ID!) {
    getProjectCategory(id: $id) {
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
export const listProjectCategorys = /* GraphQL */ `
  query ListProjectCategorys(
    $filter: ModelProjectCategoryFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listProjectCategorys(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
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
          createdAt
          createdBy
          updatedAt
          updatedBy
          categorys {
            nextToken
          }
          governmentAgencies {
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
export const getProjectGovernmentAgency = /* GraphQL */ `
  query GetProjectGovernmentAgency($id: ID!) {
    getProjectGovernmentAgency(id: $id) {
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
export const listProjectGovernmentAgencys = /* GraphQL */ `
  query ListProjectGovernmentAgencys(
    $filter: ModelProjectGovernmentAgencyFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listProjectGovernmentAgencys(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
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
          createdAt
          createdBy
          updatedAt
          updatedBy
          categorys {
            nextToken
          }
          governmentAgencies {
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
          createdAt
          createdBy
          updatedAt
          updatedBy
          categorys {
            nextToken
          }
          governmentAgencies {
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
        slackChannelUrl
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
          slackChannelUrl
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
          categorys {
            nextToken
          }
          governmentAgencies {
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
      slackIdUrl
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
        slackIdUrl
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
          createdAt
          createdBy
          updatedAt
          updatedBy
          needs {
            nextToken
          }
          projects {
            nextToken
          }
          tags {
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
        slackChannelUrl
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
          slackChannelUrl
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
          categorys {
            nextToken
          }
          governmentAgencies {
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
          slackIdUrl
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
          needs {
            nextToken
          }
          projects {
            nextToken
          }
          tags {
            nextToken
          }
        }
      }
      nextToken
    }
  }
`;
export const getUserTag = /* GraphQL */ `
  query GetUserTag($id: ID!) {
    getUserTag(id: $id) {
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
export const listUserTags = /* GraphQL */ `
  query ListUserTags(
    $filter: ModelUserTagFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUserTags(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
          createdAt
          createdBy
          updatedAt
          updatedBy
          needs {
            nextToken
          }
          projects {
            nextToken
          }
          tags {
            nextToken
          }
        }
      }
      nextToken
    }
  }
`;
