

var body= {
"query":`
    query CourseQuery {
      course(key: \"st095\" version: \"1.0.0\" locale: \"en-us\") {
        id
        key
        version
        locale
        semantic_type
        forum_path
        title
        is_public
        is_default
        
  user_state {
    node_key
    completed_at
    last_viewed_at
    unstructured
  }

        
  resources {
    files { name uri }
    google_plus_link
    career_resource_center_link
    coaching_appointments_link
    office_hours_link
    aws_provisioning_link
  }
        instructors { image_url first_name }
        project_deadline { due_at node_key }
        project {
          
  key
  version
  locale
  duration
  semantic_type
  title
  description
  is_public
  summary
  forum_path
  rubric_id
  terminal_project_id
  reviews_project_id
  
  resources {
    files { name uri }
    google_plus_link
    career_resource_center_link
    coaching_appointments_link
    office_hours_link
    aws_provisioning_link
  }
  image { url width height }


        }
        
  aggregated_state {
    node_key
    completion_amount
    completed_count
    concept_count
    last_viewed_child_key
    lesson_aggregated_states {
      node_key
      completed_at
      completion_amount
      completed_count
      concept_count
      last_viewed_child_key
    }
  }

        lessons {
          
  id
  key
  version
  locale
  semantic_type
  summary
  title
  duration
  is_public
  is_project_lesson
  display_workspace_project_only
  lesson_type

          
  image { url width height }

          
  resources {
    files { name uri }
    google_plus_link
    career_resource_center_link
    coaching_appointments_link
    office_hours_link
    aws_provisioning_link
  }

          concepts {
            id
            key
            is_public
            semantic_type
            title
            
  user_state { node_key completed_at last_viewed_at unstructured }

   resources {
    files { name uri } google_plus_link career_resource_center_link
    coaching_appointments_link office_hours_link aws_provisioning_link
  }
           
           }
          project {
            
  key version locale
  duration semantic_type
  title description
  is_public summary
  forum_path rubric_id
  terminal_project_id reviews_project_id
  resources {
    files { name uri } google_plus_link career_resource_center_link
    coaching_appointments_link office_hours_link aws_provisioning_link
  }
  image { url width height }
  project_state { state submissions { created_at updated_at url result is_legacy id status } }

          }
        }
      }
    }
  `,
		"variables":null,
		"locale":"en-gb"
};
