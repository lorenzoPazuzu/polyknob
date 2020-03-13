import styled from "styled-components"
import { Button } from "../button/button.component"
import { spacing } from "../../config/spacing"

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 12px;
`

export const ActionButton = styled(Button)`
    margin-bottom: ${spacing[2]}px;
`
