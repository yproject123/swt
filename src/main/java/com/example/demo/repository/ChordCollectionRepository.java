package com.example.demo.repository;

import com.example.demo.entity.ChordCollection;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ChordCollectionRepository extends JpaRepository<ChordCollection,Long> {
}
