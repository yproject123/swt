package com.example.demo.repository;

import com.example.demo.dto.Feedback;
import com.example.demo.dto.FeedbackDTO;
import com.example.demo.entity.Beat;
import com.example.demo.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface FeedbackRepository extends JpaRepository<Feedback,Long> {
    List<FeedbackDTO> findAllByUserFeedback(User userId);

    Feedback findByBeatFeedback(Beat beatId);

    Optional<Feedback> findByBeatFeedbackAndUserFeedback(Beat beat, User user);
}
