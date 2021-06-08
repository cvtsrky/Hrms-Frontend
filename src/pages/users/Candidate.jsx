import React, {useEffect, useState} from 'react'
import { Table } from 'semantic-ui-react'
import CandidateService from "../../services/candidateService"

export default function Candidate() {

    const [candidates, setcandidates] = useState([])

    useEffect(() => {
        let candidateService = new CandidateService();
        candidateService.getAllCandidate().then(result => setcandidates(result.data.data))},[])

    return (
        <div>
            <Table style={{ margin: "5em" }}>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Adı</Table.HeaderCell>
                        <Table.HeaderCell>Mail</Table.HeaderCell>
                        <Table.HeaderCell>Password</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>


                <Table.Body>
                    {
                        candidates.map(candidate => (
                            <Table.Row key={candidate.id}>
                                <Table.Cell>{candidate.name} {candidate.surname}</Table.Cell>
                                <Table.Cell>{candidate.mail}</Table.Cell>
                                <Table.Cell>{candidate.password}</Table.Cell>
                            </Table.Row>
                        ))}
                </Table.Body>

            </Table>
        </div>
    )
}
